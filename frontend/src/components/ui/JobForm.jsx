import { CloseIcon } from "./Icons";

export default function JobForm({ onClose }) {
  const inputStyles = `border border-dark-secondary rounded-lg px-3 py-2`;
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-dark-primary rounded-xl border border-dark-secondary p-6 w-[393px]">
        <div className="w-full flex justify-end">
          <CloseIcon onClick={onClose} className="cursor-pointer" />
        </div>
        <form className="flex flex-col gap-y-5">
          <div className="flex flex-col gap-y-2 text-light-grey">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              name="company"
              id="company"
              autoComplete="on"
              className={inputStyles}
            />
          </div>
          <div className="flex flex-col gap-y-2 text-light-grey">
            <label htmlFor="job">Job</label>
            <input type="text" name="job" id="job" className={inputStyles} />
          </div>
          <div className="flex flex-col gap-y-2 text-light-grey">
            <label htmlFor="date">Date</label>
            <input type="date" name="date" id="date" className={inputStyles} />
          </div>
          <div className="flex flex-col gap-y-2 text-light-grey">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              name="location"
              id="location"
              className={inputStyles}
            />
          </div>
          <div className="flex flex-col gap-y-2 text-light-grey">
            <label htmlFor="status">Status</label>
            <select name="status" id="status" className={inputStyles}>
              <option value="default">Choose Status</option>
              <option>Offer</option>
              <option>Pending</option>
              <option>Rejected</option>
            </select>
          </div>
          <div className="flex gap-x-2">
            <button
              type="submit"
              className="w-full bg-green py-4 px-5 rounded-md cursor-pointer"
            >
              Save
            </button>
            <button
              type="reset"
              className="w-full bg-dark-secondary py-4 px-5 rounded-md cursor-pointer"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
