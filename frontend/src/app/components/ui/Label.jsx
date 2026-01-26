const statusColors = {
  Interview: "bg-green",
  Pending: "bg-amber",
  Rejected: "bg-red",
};

export default function Label({ labelTitle, onClick, clickable }) {
  const color = statusColors[labelTitle] || "bg-light-grey";
  return (
    <p
      onClick={onClick}
      className={`p-1 ${color} rounded-sm text-xs capitalize ${clickable ? "cursor-pointer" : ""}`}
    >
      {labelTitle}
    </p>
  );
}
