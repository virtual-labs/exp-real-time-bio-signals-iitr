import { Routes, Route, Navigate } from "react-router-dom";
import Simulation from "./Simulation";
import LMSST from "./NonSt_LMS";
import RMSST from "./NonSt_RMS";
import LMS from "./LMS";
import RMS from "./RMS";

function Dashboard() {
  return (
    <Routes>
      {/* Default route */}
      <Route index element={<Navigate to="simulation/lms" />} />

      {/* Simulation routes */}
      <Route path="simulation">
        <Route path="lmsst" element={<LMSST />} />
        <Route path="rlsst" element={<RMSST />} />
         <Route path="lms" element={<LMS />} />
        <Route path="rls" element={<RMS />} />
      </Route>
    </Routes>
  );
}

export default Dashboard;
