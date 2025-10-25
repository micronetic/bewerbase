import { CalendarIcon, PinIcon, TrashIcon } from "../ui/Icons";

export default function JobCard() {
  return (
    <div className="w-full flex justify-between items-center bg-dark-secondary rounded-lg p-2.5">
      <div className="flex items-center gap-x-5">
        <div className="flex justify-center items-center rounded-sm bg-light-grey text-4xl px-6 py-4">
          G
        </div>
        <div className="flex flex-col gap-y-1.5">
          <p className="text-light-grey text-sm">Company</p>
          <div className="flex items-center gap-x-1.5">
            <p>Frontend Developer</p>
            <div className="flex justify-center items-centerpy-1 px-1.5 bg-green rounded-sm text-sm">
              Offer
            </div>
          </div>
          <div className="flex gap-x-5">
            <span className="flex items-center gap-x-1.5">
              <PinIcon className="w-5 h-auto" />
              <p className="text-light-grey text-sm">Los Angeles</p>
            </span>
            <span className="flex items-center gap-x-1.5">
              <CalendarIcon className="w-5 h-auto" />
              <p className="text-light-grey text-sm">13.11.2025</p>
            </span>
          </div>
        </div>
      </div>
      <button className="cursor-pointer">
        <TrashIcon />
      </button>
    </div>
  );
}
