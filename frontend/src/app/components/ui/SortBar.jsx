export default function SortBar() {
  const btnStyles = `w-full flex justify-center md:min-w-[7.3rem] items-center rounded-lg px-5 py-2 transition duration-300 ease-out hover:bg-dark-primary focus:bg-dark-primary active:bg-dark-primary cursor-pointer`;
  return (
    <div className="w-full flex flex-col gap-y-2 md:flex-row md:justify-between md:gap-x-2">
      <div className="flex bg-dark-secondary gap-x-0.5 p-0.5 rounded-lg">
        <button type="button" className={btnStyles}>
          All
        </button>
        <button type="button" className={btnStyles}>
          Offer
        </button>
        <button type="button" className={btnStyles}>
          Pending
        </button>
        <button type="button" className={btnStyles}>
          Rejected
        </button>
      </div>
      {/* <input
        name="searchField"
        type="search"
        placeholder="Search"
        className="py-2.5 px-5 text-light-grey bg-dark-secondary rounded-lg"
      />*/}
    </div>
  );
}
