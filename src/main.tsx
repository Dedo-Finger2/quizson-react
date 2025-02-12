import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router";
import UploadFilePage from "./UploadFile";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/upload-file" element={<UploadFilePage />} />
    </Routes>
  </BrowserRouter>
);
