const statusColors = {
  Offer: "bg-green",
  Pending: "bg-amber",
  Rejected: "bg-red",
};

export default function Label({ title }) {
  const color = statusColors[title] || "bg-light-grey";
  return (
    <div
      className={`flex justify-center items-center py-1 px-1.5 ${color} rounded-sm text-sm`}
    >
      {title}
    </div>
  );
}
