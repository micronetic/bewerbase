import { Hamburger, Logo } from "../ui/Icons";

export default function MobileHeader() {
  return (
    <header className="flex md:hidden justify-between items-center p-5">
      <Logo />
      <button>
        <Hamburger />
      </button>
    </header>
  );
}
