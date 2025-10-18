export default function Button({ title, icon }) {
  return (
    <button className="flex items-center bg-dark-secondary px-4 py-2.5 rounded-lg gap-x-5 cursor-pointer">
      {icon}
      {title}
    </button>
  );
}
