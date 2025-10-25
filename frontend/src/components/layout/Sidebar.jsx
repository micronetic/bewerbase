import { useState } from "react";
import { Link, NavLink } from "react-router";
import { HomeIcon, JobsIcon, Logo, SidebarIcon } from "../ui/Icons";

const linkClasses =
  "flex items-center gap-x-2.5 p-2.5 rounded-lg transition duration-300 ease-out hover:bg-dark-secondary";

export default function Sidebar({ hideMobile }) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  const sideLinks = [
    {
      title: "Home",
      slug: "/",
      icon: <HomeIcon />,
    },
    {
      title: "Jobs",
      slug: "/jobs",
      icon: <JobsIcon />,
    },
    // {
    //   title: "Settings",
    //   slug: "/settings",
    //   icon: <SettingsIcon />,
    // },
  ];

  return (
    <aside
      className={`${collapsed ? "w-[60px] px-2" : "w-[350px] px-7"} ${hideMobile ? "hidden md:flex flex-col gap-y-12 py-6 transition-all duration-200 ease-out border-r border-r-light-grey/20" : ""}`}
    >
      <div className="flex justify-between items-center p-2.5">
        {!collapsed && (
          <Link to="/">
            <Logo className="hover:text-accent transition duration-200" />
          </Link>
        )}
        <button onClick={toggleSidebar} className="cursor-pointer">
          <SidebarIcon />
        </button>
      </div>
      <nav>
        <ul className="flex flex-col gap-y-2.5">
          {sideLinks.map((link) => (
            <li key={link.slug}>
              <NavLink
                to={link.slug}
                className={({ isActive }) =>
                  `${linkClasses} ${isActive ? "bg-dark-secondary" : ""}`
                }
              >
                {link.icon}
                {!collapsed && link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
