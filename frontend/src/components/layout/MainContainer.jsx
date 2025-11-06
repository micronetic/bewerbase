import { Outlet } from "react-router";

export default function MainContainer() {
  return (
    <main className="h-screen flex flex-col py-6 px-3 md:px-7 items-center overflow-y-scroll">
      <Outlet />
    </main>
  );
}
