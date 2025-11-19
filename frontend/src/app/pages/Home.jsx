import ApplicationCard from "../components/ui/ApplicationCard";
import SortBar from "../components/ui/SortBar";

export default function Home() {
  const applications = [
    { id: 1, labelTitle: "Offer", labelColor: "bg-green" },
    { id: 2, labelTitle: "Pending", labelColor: "bg-amber" },
    { id: 3, labelTitle: "Rejected", labelColor: "bg-red" },
  ];
  const numApplications = applications.length;
  return (
    <div className="w-full flex flex-col items-center gap-y-5">
      <SortBar />
      {numApplications > 0 ? (
        applications.map((app) => (
          <ApplicationCard
            key={app.id}
            labelTitle={app.labelTitle}
            labelColor={app.labelColor}
          />
        ))
      ) : (
        <p>No entries yet. Add a new one</p>
      )}
    </div>
  );
}
