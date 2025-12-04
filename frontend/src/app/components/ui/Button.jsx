export default function Button({ onClick, icon, title, color }) {
  return (
    <button
      onClick={onClick}
      className={`w-full md:w-auto md:min-w-fit flex items-center justify-center ${color} px-4 py-2 rounded-lg gap-x-5 cursor-pointer`}
    >
      {icon}
      {title}
    </button>
  );
}
