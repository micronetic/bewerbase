import Header from "./app/components/layout/Header";
import MainContainer from "./app/components/layout/MainContainer";
import Sidebar from "./app/components/layout/Sidebar";

export default function App() {
  return (
    <div className="w-full h-dvh flex bg-dark-primary">
      <Sidebar hideMobile />
      <div className="flex flex-col w-full">
        <Header />
        <MainContainer />
      </div>
    </div>
  );
}
