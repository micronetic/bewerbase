import Main from "./components/layout/Main";
import Sidebar from "./components/layout/Sidebar";

export default function App() {
  return (
    <div className="w-full h-dvh flex bg-dark-primary">
      <Sidebar hideMobile />
      <Main />
    </div>
  );
}
