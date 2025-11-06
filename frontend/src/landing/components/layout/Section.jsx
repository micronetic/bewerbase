import detailsScreenshot from "../../assets/img/details-screenshot.webp";
import formScreenshot from "../../assets/img/form-screenshot.webp";

export default function Section() {
  return (
    <>
      <section className="flex flex-col items-center">
        <div className="w-full flex flex-col items-center gap-y-4 mt-20 mb-8">
          <p className="text-accent uppercase">how it works</p>
          <h2 className="text-5xl font-normal">
            Short guide for your application journey
          </h2>
        </div>
        <div className="w-full grid grid-cols-2">
          <div className="flex justify-center items-center py-8 px-28">
            <div className="flex flex-col gap-y-4">
              <h3 className="text-4xl">Überschrift</h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
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
        <div className="w-full grid grid-cols-2">
          <div className="flex justify-center items-center py-8 px-28">
            <div className="flex flex-col gap-y-4">
              <h3 className="text-4xl">Überschrift</h3>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center py-8 px-28">
            <img
              src={detailsScreenshot}
              alt="Details Modal Screenshot"
              className="w-auto h-4/5 shadow-2xl shadow-black/30"
            />
          </div>
        </div>
      </section>
    </>
  );
}
