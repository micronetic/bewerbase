import { Link } from "react-router";
import { Logo } from "../../../../Icons";
import style from "./Footer.module.css";

export default function Footer() {
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
        {/* <div className={style.socials}>
          <TwitterIcon className={style.socialIcon} />
          <InstagramIcon className={style.socialIcon} />
        </div>*/}
        <div className={style.dateContainer}>
          <p>&copy; 2025 - {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
