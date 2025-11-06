import { Link, NavLink } from "react-router";
import { Logo } from "../../../Icons";

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
    <header className="w-full flex justify-between items-center py-[1.65rem] px-7 sticky top-0 transition duration-300 ease-out">
      <Link to="#" className="flex items-center gap-x-4 px-2.5">
        <Logo />
        <p className="text-white text-2xl">ApplicationMate</p>
      </Link>
      <nav className="flex items-center gap-x-4">
        <Link to="/app" className="bg-none outline-2 outline-solid rounded p-2">
          Start Now
        </Link>
        <ul className="flex items-center gap-x-4 list-none">
          {navLinks.map((link) => (
            <li key={link.slug}>
              <NavLink to={link.slug}>{link.title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
