import { CloseIcon } from "./Icons";

export default function ApplicationForm({ onClose }) {
  const inputStyles = `border border-dark-secondary rounded-lg px-3 py-2 resize-none`;
  const labelStyles = `flex flex-col gap-y-2 text-light-grey`;
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-dark-primary rounded-xl border border-dark-secondary p-6 w-[393px]">
        <div className="w-full flex justify-end items-center mb-2">
          <CloseIcon onClick={onClose} className="cursor-pointer" />
        </div>
        <form className="flex flex-col gap-y-5">
          <label className={labelStyles}>
            Company
            <input
              type="text"
              name="company"
              autoComplete="on"
              required
              className={inputStyles}
            />
          </label>
          <label className={labelStyles}>
            Job
            <input type="text" name="job" required className={inputStyles} />
          </label>
          <label className={labelStyles}>
            Date
            <input type="date" name="date" required className={inputStyles} />
          </label>
          <label className={labelStyles}>
            Location
            <input
              type="text"
              name="location"
              required
              className={inputStyles}
            />
          </label>
          <label className={labelStyles}>
            Status
            <select name="status" required className={inputStyles}>
              <option value="default">Choose Status</option>
              <option>Offer</option>
              <option>Pending</option>
              <option>Rejected</option>
            </select>
          </label>
          <label className={labelStyles}>
            Notes
            <textarea name="notes" rows="5" className={inputStyles}></textarea>
          </label>
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
