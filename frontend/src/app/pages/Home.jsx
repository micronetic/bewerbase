import ApplicationCard from "../components/ui/ApplicationCard";
import SortBar from "../components/ui/SortBar";

export default function Home() {
  const applications = [
    {
      id: 1,
      labelTitle: "Offer",
      company: "Firmenname",
      jobTitle: "Frontend Developer",
      location: "Köln",
      date: "23.12.2025",
    },
    {
      id: 2,
      labelTitle: "Pending",
      company: "Firmenname",
      jobTitle: "Fullstack Developer",
      location: "Düsseldorf",
      date: "15.12.2026",
    },
    {
      id: 3,
      labelTitle: "Rejected",
      company: "Firmenname",
      jobTitle: "Web Developer",
      location: "Bonn",
      date: "24.12.2025",
    },
    {
      id: 4,
      labelTitle: "none",
      company: "Firmenname",
      jobTitle: "Fachinformatiker",
      location: "München",
      date: "24.11.2025",
    },
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
            company={app.company}
            jobTitle={app.jobTitle}
            location={app.location}
            date={app.date}
          />
        ))
      ) : (
        <p>No entries yet. Add a new one</p>
      )}
    </div>
  );
}
