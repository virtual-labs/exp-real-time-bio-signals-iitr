import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

const RMS = () => {
  /* ---------- Inputs ---------- */
  const [inputs, setInputs] = useState([
    { id: "forgetting-factor", label: "Forgetting factor (λ)", min: 0, max: 1, step: 0.0001, value: 0.99 },
    { id: "order", label: "Order of Filter (M)", min: 2, max: 100, step: 1, value: 4 },
    { id: "experiment", label: "No. of iterations", min: 10, max: 1000, step: 1, value: 500 }
  ]);

  const [code, setCode] = useState("");
  const [codeHtml, setCodeHtml] = useState("Code will be generated here.!");
  const [plots, setPlots] = useState(null);

  /* ---------- Input Handler ---------- */
  const handleInputChange = (id, value) => {
    const input = inputs.find(i => i.id === id);
    const newValue = Math.min(Math.max(value, input.min), input.max);
    setInputs(inputs.map(i => (i.id === id ? { ...i, value: newValue } : i)));
  };

  /* ---------- Gaussian randn ---------- */
  const randn = () => {
    let u = 0, v = 0;
    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  };

  /* ---------- RUN RLS (PURE JS) ---------- */
  const handleRun = () => {
    if (!code) {
      alert("Please generate the code first.");
      return;
    }
    const n = inputs.find(i => i.id === "experiment").value;
    const lambda = inputs.find(i => i.id === "forgetting-factor").value;
    const N = inputs.find(i => i.id === "order").value;

    const x = Array.from({ length: n }, randn);
    const d = Array.from({ length: n }, (_, i) =>
      Math.sin(0.01 * (i + 1)) + 0.5 * randn()
    );

    let w = Array(N).fill(0);
    let P = Array.from({ length: N }, (_, i) =>
      Array.from({ length: N }, (_, j) => (i === j ? 1000 : 0))
    );

    let y = Array(n).fill(0);
    let e = Array(n).fill(0);
    let wHist = Array.from({ length: n }, () => Array(N).fill(0));

    for (let i = N - 1; i < n; i++) {
      const xVec = [];
      for (let k = 0; k < N; k++) {
        xVec.push(x[i - k]);
      }

      // pi = P * x_vec
      const pi = P.map(row =>
        row.reduce((sum, val, idx) => sum + val * xVec[idx], 0)
      );

      // gain k
      const denom = lambda + xVec.reduce((s, v, idx) => s + v * pi[idx], 0);
      const kGain = pi.map(v => v / denom);

      // output
      y[i] = w.reduce((s, wi, idx) => s + wi * xVec[idx], 0);
      e[i] = d[i] - y[i];

      // weight update
      w = w.map((wi, idx) => wi + kGain[idx] * e[i]);

      // P update
      const Px = xVec.map((_, r) =>
        P[r].reduce((s, v, c) => s + v * xVec[c], 0)
      );
      P = P.map((row, r) =>
        row.map((val, c) => (val - kGain[r] * Px[c]) / lambda)
      );

      wHist[i] = [...w];
    }

    const wNorm = wHist.map(v =>
      Math.sqrt(v.reduce((s, x) => s + x * x, 0))
    );

    setPlots({ d, y, e, wNorm });
  };

  /* ---------- MATLAB Code ---------- */
  const handleGenerateCode = () => {
    const matlabCode = `function rls_nonstationary(n, lambda, N)

x = randn(n,1);
d = sin(0.01*(1:n)') + 0.5*randn(n,1);

w = zeros(N,1);
P = eye(N)*1000;
y = zeros(n,1);
e = zeros(n,1);
w_hist = zeros(n,N);

for i = N:n
    x_vec = x(i:-1:i-N+1);
    pi = P*x_vec;
    k = pi/(lambda + x_vec'*pi);
    y(i) = w'*x_vec;
    e(i) = d(i) - y(i);
    w = w + k*e(i);
    P = (P - k*x_vec'*P)/lambda;
    w_hist(i,:) = w';
end

figure; plot(d); hold on; plot(y);
figure; plot(e);
figure; plot(vecnorm(w_hist,2,2));
end`;
    setCode(matlabCode);
    setCodeHtml(`<pre style="font-size: 0.75rem; line-height: 1.2; overflow-x: auto;">${matlabCode}</pre>`);
  };

  /* ---------- Download ---------- */
  const handleDownload = () => {
    if (!code) {
      alert("Please generate the code first.");
      return;
    }
    const blob = new Blob([code], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "rls_nonstationary.m";
    link.click();
  };

  /* ---------- Chart Helper ---------- */
  const chart = (label, data) => ({
    labels: data.map((_, i) => i + 1),
    datasets: [
      {
        label,
        data,
        borderColor: "#6ec1ff",
        borderWidth: 1.5,
        pointRadius: 0
      }
    ]
  });

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2,
    plugins: {
      legend: {
        display: true,
        position: 'top'
      }
    }
  };

  return (
    <div className="flex flex-col space-y-6 p-4 w-full max-w-7xl mx-auto">
      {/* Main Controls Section */}
      <div className="flex flex-col lg:flex-row gap-5 w-full">
        {/* Code Display Section */}
        <div className="flex flex-col flex-1 min-w-0">
          <iframe
            srcDoc={codeHtml}
            title="Generated Code"
            className="border-4 p-2 rounded border-blue-hover w-full h-48 sm:h-56 md:h-64"
          />
          <div className="flex flex-col sm:flex-row justify-between gap-3 text-sm mt-4">
            <button 
              className="bg-blue-button hover:bg-blue-hover text-black px-4 py-2 rounded transition-colors w-full sm:w-auto border-2 border-black"
              onClick={handleDownload}
            >
              Download
            </button>
            <button 
              className="bg-blue-button hover:bg-blue-hover text-black px-4 py-2 rounded transition-colors w-full sm:w-auto border-2 border-black"
              onClick={handleRun}
            >
              Submit & Run
            </button>
          </div>
        </div>

        {/* Parameters Section */}
        <div className="flex flex-col text-sm w-full lg:w-80">
          <p className="font-bold text-center mb-2">Select the input Parameters</p>
          <div className="bg-blue-hover px-4 sm:px-5 py-4 rounded-xl">
            {inputs.map(input => (
              <div key={input.id} className="flex flex-col mb-4 last:mb-0">
                <pre className="text-xs sm:text-sm text-center mb-1">
                  {input.min} ≤ {input.label} ≤ {input.max}
                </pre>
                <input
                  type="number"
                  value={input.value}
                  min={input.min}
                  max={input.max}
                  step={input.step}
                  onChange={e => handleInputChange(input.id, parseFloat(e.target.value))}
                  className="w-24 mx-auto text-center border rounded px-2 py-1 mb-2"
                />
                <input
                  type="range"
                  value={input.value}
                  min={input.min}
                  max={input.max}
                  step={input.step}
                  onChange={e => handleInputChange(input.id, parseFloat(e.target.value))}
                  className="w-full"
                />
              </div>
            ))}
          </div>
          <button
            onClick={handleGenerateCode}
            className="bg-blue-button px-4 py-2 rounded mt-4 hover:opacity-80 transition-opacity w-full"
          >
            Generate Code
          </button>
        </div>
      </div>

      {/* Plots Section */}
      {plots && (
        <div className="space-y-6 w-full">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-center font-semibold mb-2">Desired vs RLS Output</h3>
            <Line data={chart("Desired vs RLS Output", plots.d)} options={chartOptions} />
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-center font-semibold mb-2">Error Signal</h3>
            <Line data={chart("Error Signal", plots.e)} options={chartOptions} />
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-center font-semibold mb-2">Norm of Weight Vector</h3>
            <Line data={chart("Norm of Weight Vector", plots.wNorm)} options={chartOptions} />
          </div>
        </div>
      )}
    </div>
  );
};

export default RMS;