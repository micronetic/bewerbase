import { Outlet } from "react-router";

export default function MainContainer({ context }) {
  return (
    <main className="h-dvh flex flex-col py-6 px-7 items-center overscroll-contain">
      <Outlet context={context} />
    </main>
  );
}
