import { CloseIcon, PinIcon } from "../../../Icons";
import Label from "./Label";

export default function ApplicationInfo({ onClose, data }) {
  return (
    <>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col items-center gap-y-2 bg-dark-primary rounded-xl border border-dark-secondary p-6 w-[375px]"
        >
          <CloseIcon onClick={onClose} className="self-end cursor-pointer" />
          <div className="w-full flex flex-col gap-y-9">
            <div className="flex flex-col items-center gap-y-1.5">
              <h2 className="text-white text-4xl font-bold capitalize">
                {data.company}
              </h2>
              <p>{data.job}</p>
              <p className="text-light-grey">
                Applied on {new Date(data.date).toLocaleDateString("de-DE")}
              </p>
              <div className="flex justify-center items-center gap-x-1.5">
                <PinIcon className="w-5 h-auto" />
                <p className="text-light-grey text-sm capitalize">
                  {data.location}
                </p>
              </div>
              <Label labelTitle={data.status} />
            </div>
            <div className="flex flex-col gap-y-2">
              <h3 className="text-lg font-bold">Notes</h3>
              <p>{data.notes}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
