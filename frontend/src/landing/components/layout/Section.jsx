import detailsScreenshot from "../../assets/img/details-screenshot.webp";
import ImageText from "./ImageText";

export default function Section() {
  return (
    <section className="max-w-5xl">
      <ImageText />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-y-4">
            <h3 className="text-2xl md:text-3xl text-center md:text-left">
              View Application Details
            </h3>
            <p>
              This detail modal provides a comprehensive overview of a saved job
              application within your tracking system. Instantly review the
              company, position, application date, location and your notes
            </p>
          </div>
        </div>
        <div className="flex justify-center md:justify-end items-center">
          <img
            src={detailsScreenshot}
            alt="Formular Screenshot"
            className="w-auto h-3/4 md:h-4/5"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
