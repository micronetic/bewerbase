import { nanoid } from "nanoid";
import { Activity, useState } from "react";
import { PlusIcon } from "../../Icons";
import ApplicationCard from "../components/ui/ApplicationCard";
import ApplicationForm from "../components/ui/ApplicationForm";
import Button from "../components/ui/Button";
import SortBar from "../components/ui/SortBar";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [applications, setApplications] = useState([]);

  function handleAddApplication(data) {
    setApplications(function (prev) {
      return [...prev, { ...data, id: nanoid() }];
    });
  }

  function deleteApplication(id) {
    console.log(id);
    setApplications(function (prev) {
      return prev.filter((app) => app.id !== id);
    });
  }

  // const applications = [
  //   {
  //     id: 1,
  //     labelTitle: "Offer",
  //     company: "Google",
  //     jobTitle: "Frontend Developer",
  //     location: "Köln",
  //     date: "23.12.2025",
  //   },
  //   {
  //     id: 2,
  //     labelTitle: "Pending",
  //     company: "Meta",
  //     jobTitle: "Fullstack Developer",
  //     location: "Düsseldorf",
  //     date: "15.12.2026",
  //   },
  //   {
  //     id: 3,
  //     labelTitle: "Rejected",
  //     company: "Firmenname",
  //     jobTitle: "Web Developer",
  //     location: "Bonn",
  //     date: "24.12.2025",
  //   },
  //   {
  //     id: 4,
  //     labelTitle: "none",
  //     company: "Firmenname",
  //     jobTitle: "Fachinformatiker",
  //     location: "München",
  //     date: "24.11.2025",
  //   },
  // ];
  const numApplications = applications.length;
  return (
    <div className="w-full flex flex-col items-center gap-y-5">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-5">
        <SortBar />
        <Button
          onClick={() => setShowModal(true)}
          icon={<PlusIcon />}
          title="Add new"
          color="bg-dark-secondary"
        />
        {/* <Button icon={<DownloadIcon />} title="Download" />*/}
      </div>
      {numApplications > 0 ? (
        applications.map((app) => (
          <ApplicationCard
            key={app.id}
            data={app}
            deleteApplication={deleteApplication}
          />
        ))
      ) : (
        <p className="text-xl mt-5">No entries yet. Add a new one</p>
      )}
      <Activity mode={showModal ? "visible" : "hidden"}>
        <ApplicationForm
          onSubmit={handleAddApplication}
          onClose={() => setShowModal(false)}
        />
      </Activity>
    </div>
  );
}
