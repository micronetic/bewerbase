import { Link, NavLink } from "react-router";
import { Logo } from "../../../../Icons";
import style from "./Header.module.css";

export default function Header() {
  const navLinks = [
    {
      title: "docs.",
      slug: "/docs",
    },
    {
      title: "imprint",
      slug: "/imprint",
    },
  ];
  return (
    <header className={style.landingHeader}>
      <div className={style.headerInner}>
        <Link to="#" className={style.logoContainer}>
          <Logo className={style.logo} />
          <p>Bewerbase</p>
        </Link>
        <nav className={style.landingNav}>
          <Link to="/app" className={style.startBtn}>
            Start Now
          </Link>
          <ul>
            {navLinks.map((link) => (
              <li key={link.slug}>
                <NavLink to={link.slug}>{link.title}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
