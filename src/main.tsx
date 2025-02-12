import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router";
import UploadFilePage from "./pages/UploadFile";
import QuizPage from "./pages/QuizPage";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/upload-file" element={<UploadFilePage />} />
      <Route path="/quiz" element={<QuizPage />} />
    </Routes>
  </BrowserRouter>
);
