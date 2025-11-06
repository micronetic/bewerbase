import { Link } from "react-router";
import { InstagramIcon, Logo, TwitterIcon } from "../../../Icons";

export default function Footer() {
  const footerDateElement = document.querySelector(".footerDate");
  const newDate = new Date().getFullYear();
  footerDateElement.innerText = newDate;
  return (
    <footer className="w-full flex justify-center items-center bg-black/50 py-40">
      <div className="flex flex-col items-center gap-y-12">
        <Link to="/">
          <Logo />
        </Link>
        <nav>
          <ul className="flex items-center gap-x-4">
            <li>
              <a href="#">docs.</a>
            </li>
            <li>
              <a href="#">imprint.</a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-x-4">
          <TwitterIcon className="text-light-grey" />
          <InstagramIcon className="text-light-grey" />
        </div>
        <span className="flex items-center gap-x-1.5 text-dark-secondary">
          &copy;
          <p className="footerDate"></p>
        </span>
      </div>
    </footer>
  );
}
