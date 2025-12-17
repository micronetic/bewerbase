export default function SortBar({ active, setActive }) {
  const sortButtons = ["All", "Pending", "Rejected"];
  const btnStyles = `w-full flex justify-center md:min-w-[7.3rem] items-center rounded-lg px-5 py-2 transition duration-300 ease-out hover:bg-dark-primary focus:bg-dark-primary active:bg-dark-primary cursor-pointer`;
  const inactiveStyle = "hover:bg-dark-primary";
  const activeStyle = "bg-dark-primary";
  return (
    <div className="w-full flex flex-col gap-y-2 md:flex-row md:justify-between md:gap-x-2">
      <div className="flex bg-dark-secondary gap-x-0.5 p-0.5 rounded-lg">
        {sortButtons.map((title) => (
          <button
            key={title}
            type="button"
            onClick={() => setActive(title)}
            className={`${btnStyles} ${active === title ? activeStyle : inactiveStyle}`}
          >
            {title}
          </button>
        ))}
      </div>
    </div>
  );
}
