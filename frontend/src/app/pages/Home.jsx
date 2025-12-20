import { jsPDF } from "jspdf";
import { nanoid } from "nanoid";
import { Activity, useEffect, useState } from "react";
import { DownloadIcon, PlusIcon } from "../../Icons";
import ApplicationCard from "../components/ui/ApplicationCard";
import ApplicationForm from "../components/ui/ApplicationForm";
import Button from "../components/ui/Button";
import SortBar from "../components/ui/SortBar";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [applications, setApplications] = useState([]);
  const [active, setActive] = useState("All");
  const deDate = `${new Date().toLocaleDateString("de-DE")}`;

  useEffect(() => {
    const ls = localStorage.getItem("applications");
    if (ls) {
      setApplications(JSON.parse(ls));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("applications", JSON.stringify(applications));
  }, [applications]);

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

  function sortByDate(a, b) {
    return new Date(b.date) - new Date(a.date);
  }

  function updateStatus(id, newStatus) {
    setApplications((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status: newStatus } : app)),
    );
  }

  function exportToPDF() {
    const pdf = new jsPDF("p", "mm", "a4");

    pdf.setFontSize(18);
    pdf.text("Bewerbungen", 10, 15);
    pdf.setFontSize(12);
    pdf.text(`Stand: ${deDate}`, 55, 15);

    pdf.setFontSize(11);
    let currentY = 30;
    applications.toSorted(sortByDate).forEach((app) => {
      pdf.text(
        `${new Date(app.date).toLocaleDateString("de-DE")} - ${app.company} (${app.job}) - ${app.location} - ${app.status}`,
        10,
        currentY,
      );
      currentY += 10;
    });

    pdf.save(`Bewerbungen_${deDate}.pdf`);
  }

  const numApplications = applications.length;
  return (
    <div className="w-full md:max-w-7xl flex flex-col items-center gap-y-5">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-5">
        <SortBar active={active} setActive={setActive} />
        <div className="w-full flex md:justify-end justify-center items-center gap-x-2">
          <Button
            onClick={() => setShowModal(true)}
            icon={<PlusIcon />}
            title="Add new"
            color="bg-dark-secondary"
          />
          <Button
            onClick={exportToPDF}
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
              data={app}
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
