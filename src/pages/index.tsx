import { Routes, Route } from "react-router-dom";
import CopyThuyetPhapPage from "./copy-thuyet-phap";

export const Routing = () => {
  console.log("[DEBUG] rendering Routing");

  return (
    <Routes>
      <Route path="/" element={<CopyThuyetPhapPage />} />
    </Routes>
  );
};
