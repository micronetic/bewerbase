import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./app/App.jsx";
import Home from "./app/pages/Home.jsx";
import Jobs from "./app/pages/Jobs.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="jobs" element={<Jobs />} />
          {/* <Route path="archive" element={<Archive />} />*/}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
