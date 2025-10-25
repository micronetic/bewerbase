import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import Jobs from "./pages/Jobs.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="jobs" element={<Jobs />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
