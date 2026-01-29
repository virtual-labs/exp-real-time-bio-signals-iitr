import React, { useState } from "react";
import Papa from "papaparse";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

export default function LMS() {
  const [desired, setDesired] = useState([]);
  const [noisy, setNoisy] = useState([]);
  const [output, setOutput] = useState([]);
  const [error, setError] = useState([]);

  const [stepSize, setStepSize] = useState(0.01);
  const [M, setM] = useState(10);
  const [selectedCSV, setSelectedCSV] = useState("/Inputs/real.csv");

  const [code, setCode] = useState("");
  const [codeHtml, setCodeHtml] = useState("Code will be generated here!");
  const [loading, setLoading] = useState(false);

  const csvFiles = [
    { label: "Real Signal", file: "/Inputs/real.csv" },
    { label: "Simulated 1", file: "/Inputs/simulated1.csv" },
  ];

  // ---------------- READ CSV ----------------
  const readCSV = async (filePath) => {
    const response = await fetch(filePath);
    const text = await response.text();
    const parsed = Papa.parse(text, { dynamicTyping: true }).data;
    return parsed.flat().filter((v) => !isNaN(v));
  };

  // ---------------- MATLAB-EQUIVALENT LMS ----------------
  const runLMS = (x, mu, M, experiments = 100) => {
    const N = x.length;

    const randn = () =>
      Math.sqrt(-2 * Math.log(Math.random())) *
      Math.cos(2 * Math.PI * Math.random());

    // A = x + noise
    const A = x.map((v) => v + 0.5 * randn());

    let wSum = Array(M).fill(0);

    // Monte-Carlo LMS training
    for (let exp = 0; exp < experiments; exp++) {
      let w = Array(M).fill(0);
      let An = Array(M).fill(0);

      for (let n = 0; n < N; n++) {
        An = [A[n], ...An.slice(0, M - 1)];
        const y = w.reduce((s, wi, i) => s + wi * An[i], 0);
        const e = x[n] - y;

        for (let i = 0; i < M; i++) {
          w[i] += mu * e * An[i];
        }
      }

      for (let i = 0; i < M; i++) {
        wSum[i] += w[i];
      }
    }

    const wFinal = wSum.map((v) => v / experiments);

    // Fixed-weight filtering
    let y = [];
    let e = [];
    let An = Array(M).fill(0);

    for (let n = 0; n < N; n++) {
      An = [A[n], ...An.slice(0, M - 1)];
      const y_n = wFinal.reduce((s, wi, i) => s + wi * An[i], 0);
      y.push(y_n);
      e.push(x[n] - y_n);
    }

    return { A, y, e };
  };

  // ---------------- RUN LMS ----------------
  const handleRun = async () => {
    if (!code) {
      alert("Please generate the code first.");
      return;
    }

    setLoading(true);

    const x = await readCSV(selectedCSV);
    const { A, y, e } = runLMS(x, stepSize, M);

    setDesired(x);
    setNoisy(A);
    setOutput(y);
    setError(e);

    setLoading(false);
  };

  // ---------------- GENERATE CODE ----------------
  const handleGenerateCode = () => {
    const jsCode = `// MATLAB-Equivalent LMS Denoising (Node.js)

function randn() {
  let u = 0, v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

function lmsDenoise(mu, x, M, experiments = 100) {
  const N = x.length;
  const A = x.map(v => v + 0.5 * randn());

  let wSum = Array(M).fill(0);

  for (let exp = 0; exp < experiments; exp++) {
    let w = Array(M).fill(0);
    let An = Array(M).fill(0);

    for (let n = 0; n < N; n++) {
      An = [A[n], ...An.slice(0, M - 1)];
      const y = w.reduce((s, wi, i) => s + wi * An[i], 0);
      const e = x[n] - y;
      for (let i = 0; i < M; i++) {
        w[i] += mu * e * An[i];
      }
    }

    for (let i = 0; i < M; i++) wSum[i] += w[i];
  }

  return wSum.map(v => v / experiments);
}

module.exports = lmsDenoise;
`;
    setCode(jsCode);
    setCodeHtml(`<pre style="font-size: 10px; overflow-x: auto;">${jsCode}</pre>`);
  };

  // ---------------- DOWNLOAD CODE ----------------
  const handleDownloadCode = () => {
    if (!code) {
      alert("Please generate the code first.");
      return;
    }

    const element = document.createElement("a");
    const file = new Blob([code], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "lms_denoise.js";
    document.body.appendChild(element);
    element.click();
  };

  // ---------------- CHART DATA ----------------
  const makeData = (label, data) => ({
    labels: data.map((_, i) => i),
    datasets: [
      {
        label,
        data,
        borderWidth: 1.5,
        borderColor: "#6ec1ff",
        pointRadius: 0,
        tension: 0.2,
      },
    ],
  });

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2,
  };

  // ---------- INPUT SLIDERS CONFIG ----------
  const inputs = [
    {
      id: "mu",
      label: "Step Size ( μ )",
      min: 0.001,
      max: 0.1,
      step: 0.001,
      value: stepSize,
    },
    {
      id: "M",
      label: "Filter Order ( M )",
      min: 2,
      max: 50,
      step: 1,
      value: M,
    },
  ];

  const handleInputChange = (id, value) => {
    const v = Number(value);
    if (id === "mu") setStepSize(v);
    if (id === "M") setM(v);
  };

  // ---------------- UI ----------------
  return (
    <div className="min-h-screen w-full p-4 md:p-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">

          {/* LEFT - Code and Plots */}
          <div className="flex-1 flex flex-col space-y-4">
            {/* Code Display */}
            <div className="w-full overflow-hidden">
              <iframe
                srcDoc={codeHtml}
                title="Generated Code"
                className="w-full h-48 sm:h-60 md:h-64 border-4 rounded border-blue-400 p-2"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-between">
              <button
                onClick={handleGenerateCode}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors w-full sm:w-auto"
              >
                Generate Code
              </button>
              <button
                onClick={handleDownloadCode}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors w-full sm:w-auto"
              >
                Download
              </button>
              <button
                onClick={handleRun}
                disabled={loading}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors w-full sm:w-auto disabled:opacity-50"
              >
                {loading ? "Processing..." : "Submit & Run"}
              </button>
            </div>

            {/* Plots */}
            {!loading && desired.length > 0 && (
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <Line data={makeData("Desired Signal", desired)} options={chartOptions} />
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <Line data={makeData("Noisy Signal", noisy)} options={chartOptions} />
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <Line data={makeData("LMS Output", output)} options={chartOptions} />
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <Line data={makeData("LMS Error", error)} options={chartOptions} />
                </div>
              </div>
            )}
          </div>

          {/* RIGHT - Input Parameters */}
          <div className="w-full lg:w-80 xl:w-96">
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 sticky top-4">
              <div className="flex flex-col items-center">
                <h2 className="font-bold text-base sm:text-lg mb-4 text-center">
                  Select the Input Parameters
                </h2>

                {/* CSV File Selection */}
                <div className="w-full mb-6">
                  <label className="block font-semibold mb-2 text-sm sm:text-base text-center">
                    Select CSV file
                  </label>
                  <select
                    value={selectedCSV}
                    onChange={(e) => setSelectedCSV(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  >
                    {csvFiles.map((file, i) => (
                      <option key={i} value={file.file}>
                        {file.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Parameter Inputs */}
                <div className="bg-blue-50 px-4 sm:px-6 py-4 sm:py-5 rounded-xl w-full">
                  {inputs.map((input, index) => (
                    <div
                      key={input.id}
                      className={`flex flex-col ${index !== inputs.length - 1 ? 'mb-6' : ''}`}
                    >
                      <label htmlFor={input.id} className="block mb-2 text-center">
                        <span className="font-serif text-sm sm:text-base">
                          <span>{input.min} ≤ </span>
                          {input.label}
                          <span> ≤ {input.max}</span>
                        </span>
                      </label>
                      <div className="flex flex-row items-center gap-2 sm:gap-3">
                        <input
                          type="number"
                          id={input.id}
                          min={input.min}
                          max={input.max}
                          step={input.step}
                          value={input.value}
                          onChange={(e) => handleInputChange(input.id, e.target.value)}
                          className="w-16 sm:w-20 text-center border border-gray-300 rounded-lg py-1 px-1 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                        <input
                          type="range"
                          min={input.min}
                          max={input.max}
                          step={input.step}
                          value={input.value}
                          onChange={(e) => handleInputChange(input.id, e.target.value)}
                          className="flex-grow cursor-pointer"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}