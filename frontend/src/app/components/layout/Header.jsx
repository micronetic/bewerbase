import { useLocation } from "react-router";
import MobileHeader from "./MobileHeader";

export default function Header() {
  const location = useLocation().pathname === "/";

  return (
    <header className="w-full">
      <MobileHeader />
      <div className="flex w-full px-7 md:py-6 items-center border-b border-b-light-grey/20">
        <h2 className="hidden text-2xl md:flex gap-x-1.5">
          {location ? "Applications" : "Jobs"}
        </h2>
      </div>
    </header>
  );
}
