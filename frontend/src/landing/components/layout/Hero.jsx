import { Link } from "react-router";
import { GitLabIcon, RocketIcon } from "../../../Icons";
import heroImage from "../../assets/img/hero-image.webp";

export default function Hero() {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-y-12 pt-20 pb-8 mt-10 md:bg-radial-[at_50%_50%] from-accent to-dark-primary to-55%">
      <div className="flex flex-col gap-y-4 items-center">
        <h1 className="md:text-7xl text-5xl font-bold text-center">
          Apply. Document.
        </h1>
        <p className="text-center">
          Turn every application into a springboard for your success.
        </p>
        <div className="flex gap-x-4 mt-4">
          <Link
            to="/app"
            className="bg-accent py-3 px-4 rounded-lg flex justify-center items-center gap-x-3 hover:ring-2 hover:ring-inset hover:ring-white/50 transition duration-200 ease-in-out"
          >
            <RocketIcon />
            Start Now
          </Link>
          <Link
            to="https://gitlab.com/microneticon/appmate-app"
            target="_blank"
            className="bg-none inset-ring-2 rounded-lg flex justify-center items-center gap-x-3 py-3 px-4"
          >
            <GitLabIcon />
            GitLab
          </Link>
        </div>
      </div>
      <img
        src={heroImage}
        className="w-11/12 md:w-3/4 border border-white/20 md:p-3 p-1 rounded-xl bg-white/10 shadow-dark-primary"
        alt="app screenshot"
        loading="eager"
      />
    </section>
  );
}
