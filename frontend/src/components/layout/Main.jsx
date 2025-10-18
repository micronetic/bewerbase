import Button from "../ui/Button";
import { DownloadIcon, PlusIcon } from "../ui/Icons";
import MobileHeader from "./MobileHeader";

export default function Main() {
  return (
    <div className="flex flex-col w-full">
      <MobileHeader />
      <main className="w-full px-7 md:py-12 py-5">
        <nav className="flex flex-col gap-y-5 items-center md:flex-row md:justify-between md:items-center">
          <h1 className="text-2xl">My Applications</h1>
          <div className="flex items-center gap-x-5">
            <Button icon={<PlusIcon />} title="Add new" />
            <Button icon={<DownloadIcon />} title="Download" />
          </div>
        </nav>
      </main>
    </div>
  );
}
