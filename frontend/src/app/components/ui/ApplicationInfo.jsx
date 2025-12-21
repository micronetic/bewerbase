import { CloseIcon, PinIcon } from "../../../Icons";
import Label from "./Label";

export default function ApplicationInfo({ onClose, data }) {
  return (
    <>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
        <div className="flex flex-col items-center gap-y-2 bg-dark-primary rounded-xl border border-dark-secondary p-6 w-[375px]">
          <CloseIcon onClick={onClose} className="self-end cursor-pointer" />
          <div className="w-full flex flex-col gap-y-9">
            <div className="flex flex-col items-center gap-y-1.5">
              <h2 className="text-white text-3xl font-bold capitalize text-center">
                {data.company}
              </h2>
              <p className="text-center text-accent">{data.job}</p>
              <p className="text-light-grey">
                Applied on {new Date(data.date).toLocaleDateString("de-DE")}
              </p>
              <div className="flex items-center gap-x-3">
                <p className="flex items-center gap-x-1 text-light-grey text-sm capitalize">
                  <PinIcon className="w-5 h-auto" />
                  {data.location}
                </p>
                <Label labelTitle={data.status} />
              </div>
            </div>
            <div className="flex flex-col gap-y-2 h-80 overflow-y-scroll">
              <h3 className="text-lg font-bold">Notes:</h3>
              <p>{data.notes}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
