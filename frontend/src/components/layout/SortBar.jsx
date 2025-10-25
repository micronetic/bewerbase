export default function SortBar() {
  const btnStyles = `flex justify-center items-center rounded-lg px-5 py-2 min-w-[7.3rem] transition duration-300 ease-out hover:bg-dark-primary focus:bg-dark-primary active:bg-dark-primary cursor-pointer`;
  return (
    <div className="w-full flex justify-between items-center">
      <form className="flex bg-dark-secondary gap-x-0.5 p-0.5 rounded-lg">
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
      </form>
      <div className="flex bg-dark-secondary rounded-lg">
        <input
          type="search"
          placeholder="Search"
          className="py-2.5 px-5 text-light-grey"
        />
      </div>
    </div>
  );
}
