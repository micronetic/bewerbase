import MobileHeader from "./MobileHeader";

export default function Header() {
  return (
    <header className="w-full">
      <MobileHeader />
      <div className="flex w-full px-7 md:py-6 items-center border-b border-b-light-grey/20">
        <h2 className="hidden text-2xl md:flex gap-x-1.5">Welcome Back</h2>
      </div>
    </header>
  );
}
