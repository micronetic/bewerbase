import { Activity, useState } from "react";
import { CalendarIcon, PinIcon, TrashIcon } from "../../../Icons";
import ApplicationInfo from "./ApplicationInfo";
import Label from "./Label";

export default function ApplicationCard({ data, deleteApplication }) {
  const [openAppCard, setOpenAppCard] = useState(false);

  return (
    <div
      onClick={() => setOpenAppCard(true)}
      className="w-full flex justify-between items-center bg-dark-secondary rounded-lg px-2 py-1 md:px-2"
    >
      <div className="flex items-center gap-x-5">
        <div className="w-16 h-16 flex justify-center items-center rounded-sm bg-light-grey text-4xl uppercase">
          {data.company.charAt(0)}
        </div>
        <div className="flex flex-col gap-y-1.5">
          <p className="text-light-grey text-sm capitalize">{data.company}</p>
          <div className="flex items-center gap-x-1.5">
            <p className="text-lg md:text-xl truncate max-w-44 md:max-w-none capitalize">
              {data.job}
            </p>
            <Label labelTitle={data.status} />
          </div>
          <div className="flex gap-x-3 md:gap-x-5">
            <p className="flex items-center gap-x-1 text-light-grey text-sm capitalize">
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
      <button
        type="button"
        onClick={() => deleteApplication(data.id)}
        className="cursor-pointer p-1.5 rounded-sm text-light-grey hover:bg-dark-primary hover:text-red transition duration-200"
      >
        <TrashIcon />
      </button>
      <Activity mode={openAppCard ? "visible" : "hidden"}>
        <ApplicationInfo onClose={() => setOpenAppCard(false)} data={data} />
      </Activity>
    </div>
  );
}
