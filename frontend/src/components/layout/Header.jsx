import { useState } from "react";
import { createPortal } from "react-dom";
import ApplicationForm from "../ui/ApplicationForm";
import Button from "../ui/Button";
import { DownloadIcon, PlusIcon } from "../ui/Icons";
import MobileHeader from "./MobileHeader";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  return (
    <header className="w-full">
      <MobileHeader />
      <div className="flex w-full px-7 md:py-6 py-5 flex-col gap-y-5 items-center md:flex-row md:justify-between md:items-center md:border-b md:border-b-light-grey/20">
        <h2 className="text-2xl flex gap-x-1.5">Welcome Back</h2>
        <div className="flex items-center gap-x-5">
          <Button
            onClick={() => setShowModal(true)}
            icon={<PlusIcon />}
            title="Add new"
          />
          <Button icon={<DownloadIcon />} title="Download" />
        </div>
      </div>
      {showModal &&
        createPortal(
          <ApplicationForm onClose={() => setShowModal(false)} />,
          document.body,
        )}
    </header>
  );
}
