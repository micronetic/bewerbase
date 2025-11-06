import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.jsx";
import Home from "./app/pages/Home.jsx";
import Jobs from "./app/pages/Jobs.jsx";
import MailGenerator from "./app/pages/MailGenerator.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="email-generator" element={<MailGenerator />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
