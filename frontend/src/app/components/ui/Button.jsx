export default function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className="min-w-fit flex items-center bg-dark-secondary px-4 py-2 rounded-lg gap-x-5 cursor-pointer"
    >
      {props.icon}
      {props.title}
    </button>
  );
}
