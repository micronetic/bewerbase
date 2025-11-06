import { CalendarIcon, PinIcon, TrashIcon } from "../../../Icons";
import Label from "./Label";

export default function ApplicationCard(props) {
  return (
    <div className="w-full flex justify-between items-center bg-dark-secondary rounded-lg md:p-2.5">
      <div className="flex items-center gap-x-5 overflow-hidden">
        <div className="h-full flex justify-center items-center rounded-lg md:rounded-sm bg-light-grey text-4xl px-6 py-6 md:py-4">
          G
        </div>
        <div className="flex flex-col gap-y-1.5">
          <p className="text-light-grey text-sm">Company</p>
          <div className="flex items-center gap-x-1.5">
            <p>Frontend Developer</p>
            <Label title={props.labelTitle} bgColor={props.labelColor} />
          </div>
          <div className="flex gap-x-3 md:gap-x-5">
            <div className="flex items-center gap-x-1.5">
              <PinIcon className="w-5 h-auto" />
              <p className="text-light-grey text-sm">Los Angeles</p>
            </div>
            <div className="flex items-center gap-x-1.5">
              <CalendarIcon className="w-5 h-auto" />
              <p className="text-light-grey text-sm">13.11.2025</p>
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
