import { useState } from "react";
import { Link } from "react-router";
import { CloseIcon, Hamburger, Logo } from "../../../Icons";

export default function MobileHeader() {
  const [open, setOpen] = useState(false);
  function openMenu() {
    setOpen(true);
  }

  function closeMenu() {
    setOpen(false);
  }

  const menuLinks = [
    {
      title: "Home",
      slug: "/app",
    },
    {
      title: "Jobs",
      slug: "/app/jobs",
    },
    // {
    //   title: "Email generator",
    //   slug: "/email-generator",
    // },
  ];
  return (
    <div className="w-full flex md:hidden justify-between items-center p-6">
      <Link to="/">
        <Logo />
      </Link>
      <Hamburger onClick={openMenu} />
      {open && (
        <div className="fixed inset-0 w-full h-screen flex flex-col items-center bg-dark-primary/80 backdrop-blur-lg p-5 animate-fadeIn">
          <CloseIcon onClick={closeMenu} className="self-end" />
          <div className="flex flex-col items-center gap-y-10 mt-20">
            <Logo className="w-8 h-auto" />
            <nav>
              <ul className="text-center">
                {menuLinks.map((link) => (
                  <li key={link.slug} className="mb-3">
                    <Link to={link.slug} onClick={closeMenu}>
                      {link.title}
                    </Link>
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
