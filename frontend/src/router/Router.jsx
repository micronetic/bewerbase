import { BrowserRouter, Route, Routes } from "react-router";
import App from "../app/App.jsx";
import Archive from "../app/pages/Archive.jsx";
import Home from "../app/pages/Home.jsx";
import Jobs from "../app/pages/Jobs.jsx";
import LandingPage from "../landing/LandingPage.jsx";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/app" element={<App />}>
          <Route index element={<Home />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="archive" element={<Archive />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
