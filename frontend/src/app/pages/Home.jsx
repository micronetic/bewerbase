import { nanoid } from "nanoid";
import { Activity, useEffect, useState } from "react";
import { DownloadIcon, PlusIcon } from "../../Icons";
import ApplicationCard from "../components/ui/ApplicationCard";
import ApplicationForm from "../components/ui/ApplicationForm";
import Button from "../components/ui/Button";
import { exportToPDF } from "../utils/exportToPDF";
import { sortByDate } from "../utils/helpers";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [applications, setApplications] = useState([]);
  // const [active, setActive] = useState("All");

  useEffect(() => {
    const ls = localStorage.getItem("applications");
    if (ls) {
      setApplications(JSON.parse(ls));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("applications", JSON.stringify(applications));
  }, [applications]);

  function handleAddApplication(app) {
    setApplications(function (prev) {
      return [...prev, { ...app, id: nanoid() }];
    });
  }

  function deleteApplication(id) {
    console.log(id);
    setApplications(function (prev) {
      return prev.filter((app) => app.id !== id);
    });
  }

  function updateStatus(id, newStatus) {
    setApplications((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status: newStatus } : app)),
    );
  }

  const numApplications = applications.length;
  return (
    <div className="w-full md:max-w-7xl flex flex-col items-center gap-y-5">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-5">
        {/* <SortBar active={active} setActive={setActive} />*/}
        <div className="w-full flex md:justify-end justify-center items-center gap-x-2">
          <Button
            onClick={() => setShowModal(true)}
            icon={<PlusIcon />}
            title="Add new"
            color="bg-dark-secondary"
          />
          <Button
            onClick={() => exportToPDF(applications)}
            icon={<DownloadIcon />}
            title="Download"
            color="bg-dark-secondary"
          />
        </div>
      </div>
      {numApplications > 0 ? (
        applications
          .toSorted(sortByDate)
          .map((app) => (
            <ApplicationCard
              key={app.id}
              app={app}
              deleteApplication={deleteApplication}
              updateStatus={updateStatus}
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
