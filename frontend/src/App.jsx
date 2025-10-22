import MainContainer from "./components/layout/MainContainer";
import Sidebar from "./components/layout/Sidebar";

export default function App() {
  return (
    <div className="w-full h-dvh flex bg-dark-primary">
      <Sidebar hideMobile />
      <MainContainer />
    </div>
  );
}
