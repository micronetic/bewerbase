import { DownloadIcon, Hamburger, Logo, PlusIcon } from "../ui/Icons";

export default function Main() {
  return (
    <div className="flex flex-col w-full">
      <header className="flex md:hidden justify-between items-center p-5">
        <Logo />
        <button>
          <Hamburger />
        </button>
      </header>
      <main className="w-full px-7 md:py-12 py-5">
        <nav className="flex flex-col gap-y-5 items-center md:flex-row md:justify-between md:items-center">
          <h1 className="text-2xl">My Applications</h1>
          <div className="flex items-center gap-x-5">
            <button className="flex items-center bg-dark-secondary px-4 py-2.5 rounded-lg gap-x-5 cursor-pointer">
              <PlusIcon />
              Add new
            </button>
            <button className="flex items-center bg-dark-secondary px-4 py-2.5 rounded-lg gap-x-5 cursor-pointer">
              <DownloadIcon />
              Download
            </button>
          </div>
        </nav>
      </main>
    </div>
  );
}
