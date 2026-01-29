import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Simulation from "./pages/Simulation.jsx";
import Simulation1 from "./pages/Simulation1.jsx";
import Simulation2 from "./pages/Simulation2.jsx";
import Simulation3 from "./pages/Simulation3.jsx";
import LMSST from "./pages/NonSt_LMS.jsx";
import RMSST from "./pages/NonSt_RMS.jsx";
import LMS from "./pages/LMS.jsx";
import RLS from "./pages/RMS.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/simulation" />} />
        <Route path="/simulation" element={<Simulation />} />
        <Route path="/simulation/1" element={<Simulation1 />} />
        <Route path="/simulation/2" element={<Simulation2 />} />
        <Route path="/simulation/3" element={<Simulation3 />} />
        <Route path="/lmsst" element={<LMSST/>} />
        <Route path="/rlsst" element={<RMSST />} />
        <Route path="/lms" element={<LMS/>} />
        <Route path="/rls" element={<RLS />} />
      </Routes>
    </Router>
  );
};

export default App;
