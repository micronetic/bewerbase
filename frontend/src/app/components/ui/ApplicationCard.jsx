import { Activity, useState } from "react";
import { CalendarIcon, PinIcon, TrashIcon } from "../../../Icons";
import ApplicationInfo from "./ApplicationInfo";
import Button from "./Button";
import Label from "./Label";

export default function ApplicationCard({
  app,
  deleteApplication,
  updateStatus,
}) {
  const [openAppCard, setOpenAppCard] = useState(false);
  const [openStatusChange, setOpenStatusChange] = useState(false);

  function StatusChangeContent({ onClose, onStatusChange }) {
    const statuses = ["Offer", "Pending", "Rejected"];
    return (
      <div className="absolute bottom-10 right-0 mb-2 p-3 flex gap-x-3 bg-dark-primary rounded-xl border border-dark-secondary animate-fadeIn">
        {statuses.map((status) => (
          <Label
            key={status}
            labelTitle={status}
            onClick={() => {
              onStatusChange(status);
              onClose();
            }}
          />
        ))}
      </div>
    );
  }

  function toggleStatusChange() {
    setOpenStatusChange((toggle) => !toggle);
  }

  return (
    <div className="w-full flex md:flex-row flex-col gap-y-2 md:gap-x-3 md:items-center bg-dark-secondary rounded-lg px-2 py-1 md:px-2">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center gap-x-5">
          <div className="w-16 h-16 flex shrink-0 justify-center items-center rounded-sm bg-light-grey text-4xl uppercase">
            {app.company.charAt(0)}
          </div>
          <div className="flex flex-col gap-y-1.5">
            <p className="text-light-grey text-sm">{app.company}</p>
            <div className="flex items-center gap-x-1.5">
              <p
                onClick={() => setOpenAppCard(true)}
                className="max-w-36 md:max-w-xs truncate text-lg md:text-xl hover:text-accent duration-200 ease-out cursor-pointer hover:underline"
              >
                {app.job}
              </p>
              <Label labelTitle={app.status} />
            </div>
            <div className="flex gap-x-3 md:gap-x-5">
              <p className="flex items-center gap-x-1 text-light-grey text-sm">
                <PinIcon className="w-5 h-auto" />
                {app.location}
              </p>
              <p className="flex items-center gap-x-1 text-light-grey text-sm">
                <CalendarIcon className="w-5 h-auto" />
                {new Date(app.date).toLocaleDateString("de-DE")}
              </p>
            </div>
          </div>
        </div>
        <Button
          icon={<TrashIcon />}
          onClick={() => deleteApplication(app.id)}
          color="hover:bg-dark-primary hover:text-red text-light-grey hover:text-red"
        />
      </div>
      <div className="relative md:min-w-fit">
        <Button
          title="Change Status"
          color="bg-dark-primary w-full"
          onClick={toggleStatusChange}
        />
        <Activity mode={openStatusChange ? "visible" : "hidden"}>
          <StatusChangeContent
            onClose={() => setOpenStatusChange(false)}
            onStatusChange={(status) => updateStatus(app.id, status)}
          />
        </Activity>
      </div>
      <Activity mode={openAppCard ? "visible" : "hidden"}>
        <ApplicationInfo onClose={() => setOpenAppCard(false)} app={app} />
      </Activity>
    </div>
  );
}
