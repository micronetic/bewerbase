import { useState } from "react";
import Header from "./components/layout/Header";
import MainContainer from "./components/layout/MainContainer";
import Sidebar from "./components/layout/Sidebar";

export default function App() {
  const [applications, setApplications] = useState([]);
  const addApplication = (data) => {
    setApplications((prev) => [...prev, data]);
  };
  return (
    <div className="w-full h-dvh flex bg-dark-primary">
      <Sidebar hideMobile />
      <div className="flex flex-col w-full">
        <Header onAddApp={addApplication} />
        <MainContainer context={{ applications }} />
      </div>
    </div>
  );
}
