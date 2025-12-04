import { Activity, useState } from "react";
import { CalendarIcon, PinIcon, TrashIcon } from "../../../Icons";
import ApplicationInfo from "./ApplicationInfo";
import Button from "./Button";
import Label from "./Label";

export default function ApplicationCard({ data, deleteApplication }) {
  const [openAppCard, setOpenAppCard] = useState(false);
  const [showStatusChange, setShowStatusChange] = useState(false);

  function StatusChangeContent({ onClose }) {
    return (
      <div className="absolute bottom-10 right-0 mb-2 p-3 flex gap-x-3 bg-dark-primary rounded-xl border border-dark-secondary">
        <Label labelTitle="Offer" onClick={onClose} />
        <Label labelTitle="Pending" onClick={onClose} />
        <Label labelTitle="Rejected" onClick={onClose} />
      </div>
    );
  }

  function toggleStatusChange() {
    setShowStatusChange((toggle) => !toggle);
  }

  return (
    <div className="w-full flex md:flex-row flex-col gap-y-2 md:gap-x-3 md:items-center bg-dark-secondary rounded-lg px-2 py-1 md:px-2">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center gap-x-5">
          <div className="w-16 h-16 flex shrink-0 justify-center items-center rounded-sm bg-light-grey text-4xl uppercase">
            {data.company.charAt(0)}
          </div>
          <div className="flex flex-col gap-y-1.5">
            <p className="text-light-grey text-sm">{data.company}</p>
            <div className="flex items-center gap-x-1.5">
              <p
                onClick={() => setOpenAppCard(true)}
                className="max-w-40 md:max-w-xs truncate text-lg md:text-xl hover:text-accent duration-200 ease-out cursor-pointer"
              >
                {data.job}
              </p>
              <Label labelTitle={data.status} />
            </div>
            <div className="flex gap-x-3 md:gap-x-5">
              <p className="flex items-center gap-x-1 text-light-grey text-sm">
                <PinIcon className="w-5 h-auto" />
                {data.location}
              </p>
              <p className="flex items-center gap-x-1 text-light-grey text-sm">
                <CalendarIcon className="w-5 h-auto" />
                {new Date(data.date).toLocaleDateString("de-DE")}
              </p>
            </div>
          </div>
        </div>
        <Button
          icon={<TrashIcon />}
          onClick={() => deleteApplication(data.id)}
          color="hover:bg-dark-primary hover:text-red text-light-grey hover:text-red transition duration-200"
        />
      </div>
      <div className="relative md:min-w-fit">
        <Button
          title="Change Status"
          color="bg-dark-primary"
          onClick={toggleStatusChange}
        />
        <Activity mode={showStatusChange ? "visible" : "hidden"}>
          <StatusChangeContent onClose={() => setShowStatusChange(false)} />
        </Activity>
      </div>
      <Activity mode={openAppCard ? "visible" : "hidden"}>
        <ApplicationInfo onClose={() => setOpenAppCard(false)} data={data} />
      </Activity>
    </div>
  );
}
