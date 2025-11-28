import formScreenshot from "../../assets/img/form-screenshot.webp";

export default function ImageText() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-y-4">
            <h3 className="text-2xl md:text-3xl text-center md:text-left">
              Log New Application
            </h3>
            <p>
              Use this simple form to capture all the essential details of a new
              job application directly into your tracking system. Log the
              company, the specific job title, the submission date, and the
              location to ensure your applications are organized from the start.
              With the dedicated Status and Notes fields, you can easily monitor
              the current progress and keep track of important information
            </p>
          </div>
        </div>
        <div className="flex justify-center md:justify-end items-center">
          <img
            src={formScreenshot}
            alt="Formular Screenshot"
            className="w-auto h-3/4 md:h-4/5"
          />
        </div>
      </div>
    </>
  );
}
