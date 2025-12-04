import { useState } from "react";
import { Link, NavLink } from "react-router";
import { HomeIcon, JobsIcon, Logo, SidebarIcon } from "../../../Icons";

const linkClasses =
  "flex items-center gap-x-2.5 p-2.5 rounded-lg transition duration-300 ease-out hover:bg-dark-secondary";

export default function Sidebar({ hideMobile }) {
  const [collapsed, setCollapsed] = useState(false);

  function toggleSidebar() {
    setCollapsed((toggle) => !toggle);
  }

  const sideLinks = [
    {
      title: "Home",
      slug: "/app",
      icon: <HomeIcon />,
    },
    {
      title: "Jobs",
      slug: "/app/jobs",
      icon: <JobsIcon />,
    },
    // {
    //   title: "Email",
    //   slug: "/email-generator",
    //   icon: <GeneratorIcon />,
    // },
  ];

  return (
    <aside
      className={`flex-col gap-y-14 py-6 transition-all duration-200 ease-out border-r border-r-light-grey/20 ${collapsed ? "w-[60px] px-2" : "w-[350px] px-6"} ${hideMobile ? "hidden md:flex" : ""}`}
    >
      <div
        className={`flex items-center ${collapsed ? "justify-center" : "justify-between"}`}
      >
        {!collapsed && (
          <Link to="/">
            <Logo />
          </Link>
        )}
        <SidebarIcon onClick={toggleSidebar} />
      </div>
      <nav>
        <ul className="flex flex-col gap-y-2.5">
          {sideLinks.map((link) => (
            <li key={link.slug}>
              <NavLink
                to={link.slug}
                end={link.slug === "/app"}
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
