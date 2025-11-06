import { useState } from "react";
import { Link } from "react-router";
import { CloseIcon, Hamburger, Logo } from "../ui/Icons";

export default function MobileHeader() {
  const [open, setOpen] = useState(false);
  function toggleMenu() {
    setOpen((prev) => !prev);
  }

  const menuLinks = [
    {
      title: "Home",
      slug: "/",
    },
    {
      title: "Jobs",
      slug: "/jobs",
    },
    // {
    //   title: "Email generator",
    //   slug: "/email-generator",
    // },
  ];
  return (
    <div className="w-full flex md:hidden justify-between items-center p-5">
      <Logo />
      <button onClick={toggleMenu}>
        <Hamburger />
      </button>
      {open && (
        <div className="fixed inset-0 w-full h-screen flex flex-col items-center bg-dark-primary/80 backdrop-blur-lg p-5">
          <button onClick={toggleMenu} className="self-end">
            <CloseIcon />
          </button>
          <div className="flex flex-col items-center gap-y-10 mt-20">
            <Logo />
            <nav>
              <ul className="text-center">
                {menuLinks.map((link) => (
                  <li key={link.slug} className="mb-3">
                    <Link to={link.slug}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
