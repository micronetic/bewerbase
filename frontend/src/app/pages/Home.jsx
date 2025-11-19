import ApplicationCard from "../components/ui/ApplicationCard";
import SortBar from "../components/ui/SortBar";

export default function Home() {
  const applications = [
    { id: 1, title: "Offer" },
    { id: 2, title: "Pending" },
    { id: 3, title: "Rejected" },
    { id: 4, title: "none" },
  ];
  const numApplications = applications.length;
  return (
    <div className="w-full flex flex-col items-center gap-y-5">
      <SortBar />
      {numApplications > 0 ? (
        applications.map((app) => (
          <ApplicationCard key={app.id} title={app.title} />
        ))
      ) : (
        <p>No entries yet. Add a new one</p>
      )}
    </div>
  );
}
