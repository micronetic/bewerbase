import { useState } from "react";
import { HomeIcon, JobsIcon, Logo, SidebarIcon } from "../ui/Icons";

const linkClasses =
  "flex items-center gap-x-2.5 p-2.5 rounded-lg hover:bg-dark-secondary hover:inset-ring inset-ring-light-grey transition duration-300 ease-out active:bg-dark-secondary";

export default function Sidebar({ hideMobile }) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <aside
      className={`${collapsed ? "w-[60px] px-2" : "w-[350px] px-7"} ${hideMobile ? "hidden md:flex flex-col gap-y-12 py-12 transition-all duration-200 ease-out border-r border-r-light-grey/50" : ""}`}
    >
      <div className="flex justify-between items-center p-2.5">
        {!collapsed && <Logo />}
        <button onClick={toggleSidebar} className="cursor-pointer">
          <SidebarIcon />
        </button>
      </div>
      <nav className="flex flex-col gap-y-2.5">
        <a href="" className={linkClasses}>
          <HomeIcon />
          {!collapsed && <span>Home</span>}
        </a>
        <a href="" className={linkClasses}>
          <JobsIcon />
          {!collapsed && <span>Jobs</span>}
        </a>
      </nav>
    </aside>
  );
}
