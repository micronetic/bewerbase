import { BrowserRouter, Route, Routes } from "react-router";
import App from "../app/App.jsx";
import Home from "../app/pages/Home.jsx";
import Jobs from "../app/pages/Jobs.jsx";
import MailGenerator from "../app/pages/MailGenerator.jsx";
import Section from "../landing/components/layout/Section.jsx";
import LandingPage from "../landing/LandingPage.jsx";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route index element={<Section />} />
        </Route>

        <Route path="/app" element={<App />}>
          <Route index element={<Home />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="email-generator" element={<MailGenerator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
