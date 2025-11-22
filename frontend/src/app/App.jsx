import Header from "./components/layout/Header";
import MainContainer from "./components/layout/MainContainer";
import Sidebar from "./components/layout/Sidebar";

export default function App() {
  return (
    <div className="w-full h-dvh flex bg-dark-primary selection:bg-accent">
      <Sidebar hideMobile />
      <div className="flex flex-col w-full">
        <Header />
        <MainContainer />
      </div>
    </div>
  );
}
