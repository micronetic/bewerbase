import { CalendarIcon, PinIcon, TrashIcon } from "../../../Icons";
import Label from "./Label";

export default function ApplicationCard({
  labelTitle,
  company,
  jobTitle,
  location,
  date,
}) {
  return (
    <div className="w-full flex justify-between items-center bg-dark-secondary rounded-lg px-2 py-1 md:px-2">
      <div className="flex items-center gap-x-5 overflow-hidden">
        <div className="w-16 h-16 flex justify-center items-center rounded-sm bg-light-grey text-4xl">
          {company.charAt(0).toUpperCase()}
        </div>
        <div className="flex flex-col gap-y-1.5">
          <p className="text-light-grey text-sm">{company}</p>
          <div className="flex items-center gap-x-1.5">
            <p className="text-lg md:text-xl truncate max-w-44 md:max-w-none">
              {jobTitle}
            </p>
            <Label labelTitle={labelTitle} />
          </div>
          <div className="flex gap-x-3 md:gap-x-5">
            <div className="flex items-center gap-x-1.5">
              <PinIcon className="w-5 h-auto" />
              <p className="text-light-grey text-sm">{location}</p>
            </div>
            <div className="flex items-center gap-x-1.5">
              <CalendarIcon className="w-5 h-auto" />
              <p className="text-light-grey text-sm">{date}</p>
            </div>
          </div>
        </div>
      </div>
      <button className="cursor-pointer p-1.5 rounded-sm text-light-grey hover:bg-dark-primary hover:text-red transition duration-200">
        <TrashIcon />
      </button>
    </div>
  );
}
