import { useState } from "react";

export default function SortBar() {
  const sortButtons = [
    {
      title: "All",
    },
    {
      title: "Offer",
    },
    {
      title: "Pending",
    },
    {
      title: "Rejected",
    },
  ];
  const btnStyles = `w-full flex justify-center md:min-w-[7.3rem] items-center rounded-lg px-5 py-2 transition duration-300 ease-out hover:bg-dark-primary focus:bg-dark-primary active:bg-dark-primary cursor-pointer`;
  const [active, setActive] = useState(sortButtons[0].title);
  const inactiveStyle = "hover:bg-dark-primary";
  const activeStyle = "bg-dark-primary";
  return (
    <div className="w-full flex flex-col gap-y-2 md:flex-row md:justify-between md:gap-x-2">
      <div className="flex bg-dark-secondary gap-x-0.5 p-0.5 rounded-lg">
        {sortButtons.map((button) => (
          <button
            key={button.title}
            type="button"
            onClick={() => setActive(button.title)}
            className={`${btnStyles} ${active === button.title ? activeStyle : inactiveStyle}`}
          >
            {button.title}
          </button>
        ))}
      </div>
    </div>
  );
}
