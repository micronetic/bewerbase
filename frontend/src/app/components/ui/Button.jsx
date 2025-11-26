export default function Button({ onClick, icon, title, color }) {
  return (
    <button
      onClick={onClick}
      className={`min-w-fit flex items-center ${color} px-4 py-2 rounded-lg gap-x-5 cursor-pointer`}
    >
      {icon}
      {title}
    </button>
  );
}
