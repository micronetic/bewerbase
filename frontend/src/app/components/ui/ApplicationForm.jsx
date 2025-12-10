import { useState } from "react";
import { CloseIcon } from "../../../Icons";

export default function ApplicationForm({ onClose, onSubmit }) {
  const inputStyles = `border border-dark-secondary rounded-lg px-3 py-2 resize-none focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent`;
  const labelStyles = `flex flex-col gap-y-2 text-light-grey`;

  const initialFormData = {
    company: "",
    job: "",
    date: "",
    location: "",
    status: "not set",
    notes: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(function (prevState) {
      return { ...prevState, [name]: value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    onSubmit(formData);
    setFormData(initialFormData);
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
      <div className="h-fit bg-dark-primary rounded-xl border border-dark-secondary p-6 w-[375px]">
        <div className="w-full flex justify-end items-center mb-2">
          <CloseIcon onClick={onClose} className="cursor-pointer" />
        </div>
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="flex flex-col gap-y-5"
        >
          <label className={labelStyles}>
            Company
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className={inputStyles}
            />
          </label>
          <label className={labelStyles}>
            Job
            <input
              type="text"
              name="job"
              value={formData.job}
              onChange={handleChange}
              required
              className={inputStyles}
            />
          </label>
          <label className={labelStyles}>
            Date
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className={inputStyles}
            />
          </label>
          <label className={labelStyles}>
            Location
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className={inputStyles}
            />
          </label>
          <label className={labelStyles}>
            Status
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
              className={inputStyles}
            >
              <option>Choose Status</option>
              <option>Offer</option>
              <option>Pending</option>
              <option>Rejected</option>
            </select>
          </label>
          <label className={labelStyles}>
            Notes
            <textarea
              value={formData.notes}
              onChange={handleChange}
              name="notes"
              rows="2"
              className={inputStyles}
            ></textarea>
          </label>
          <div className="flex gap-x-2">
            <button
              type="submit"
              className="w-full bg-green py-4 px-5 rounded-md cursor-pointer"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => setFormData(initialFormData)}
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
