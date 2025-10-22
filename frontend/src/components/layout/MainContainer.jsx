import { Outlet } from "react-router";

export default function MainContainer() {
  return (
    <main className="h-dvh flex flex-col p-6 items-center overscroll-contain">
      <Outlet />
    </main>
  );
}
