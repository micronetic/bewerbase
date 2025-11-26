import detailsScreenshot from "../../assets/img/details-screenshot.webp";
import formScreenshot from "../../assets/img/form-screenshot.webp";

export default function Section() {
  return (
    <>
      <section className="flex flex-col items-center">
        <div className="w-full flex flex-col items-center gap-y-4 mt-20 mb-8">
          <p className="text-accent uppercase">how it works</p>
          <h2 className="text-3xl md:text-5xl font-normal text-center">
            Short guide for your application journey
          </h2>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2">
          <div className="flex justify-center items-center px-5 md:py-8 md:px-28">
            <div className="flex flex-col gap-y-4">
              <h3 className="text-2xl md:text-4xl text-center md:text-left">
                Log New Application
              </h3>
              <p className="w-full">
                Use this simple form to capture all the essential details of a
                new job application directly into your tracking system. Log the
                company, the specific job title, the submission date, and the
                location to ensure your applications are organized from the
                start. With the dedicated Status and Notes fields, you can
                easily monitor the current progress and keep track of important
                information
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center py-8 px-28">
            <img
              src={formScreenshot}
              alt="Formular Screenshot"
              className="w-auto h-4/5 shadow-2xl shadow-black/30"
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2">
          <div className="flex justify-center items-center px-5 md:py-8 md:px-28">
            <div className="flex flex-col gap-y-4">
              <h3 className="text-2xl md:text-4xl text-center md:text-left">
                View Application Details
              </h3>
              <p className="w-full">
                This detail modal provides a comprehensive overview of a saved
                job application within your tracking system. Instantly review
                the company, position, application date, location and your notes
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center py-8 px-28">
            <img
              src={detailsScreenshot}
              alt="Formular Screenshot"
              className="w-auto h-4/5 shadow-2xl shadow-black/30"
            />
          </div>
        </div>
      </section>
    </>
  );
}
