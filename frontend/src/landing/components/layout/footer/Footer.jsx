import { useEffect, useState } from "react";
import { Link } from "react-router";
import { InstagramIcon, Logo, TwitterIcon } from "../../../../Icons";
import style from "./Footer.module.css";

export default function Footer() {
  const [date, setDate] = useState("");
  useEffect(() => {
    const today = new Date().getFullYear();
    setDate(today);
  }, []);
  return (
    <footer className={style.footer}>
      <div className={style.footerInner}>
        <Link to="/">
          <Logo />
        </Link>
        <nav className={style.footerNav}>
          <ul>
            <li>
              <a href="#">docs.</a>
            </li>
            <li>
              <a href="#">imprint.</a>
            </li>
          </ul>
        </nav>
        <div className={style.socials}>
          <TwitterIcon className={style.socialIcon} />
          <InstagramIcon className={style.socialIcon} />
        </div>
        <span className="flex items-center gap-x-1.5 text-dark-secondary">
          &copy;
          <p>{date}</p>
        </span>
      </div>
    </footer>
  );
}
