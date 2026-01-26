import { useEffect, useState } from "react";
import { getJobsApi } from "../api/getJobsApi";
import { formatDate } from "../utils/helpers";

export default function Jobs() {
  const [stellen, setStellen] = useState([]);

  useEffect(() => {
    getJobsApi().then(setStellen);
  }, []);
  return (
    <div className="w-full md:max-w-7xl">
      {stellen.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {stellen.map((job, index) => (
            <div
              key={index}
              className="flex flex-col justify-between gap-y-2 bg-dark-secondary p-4 rounded-xl"
            >
              <h3 className="flex flex-col font-bold text-xl hyphens-auto mb-1.5">
                {job.beruf || "beruf"}
                <span className="text-sm font-normal text-accent">
                  {job.titel || "Kein Titel Vorhanden"}
                </span>
              </h3>
              <div>
                <p>{job.arbeitgeber || "Unbekannter Arbeitgeber"}</p>
                <div className="flex gap-x-2">
                  <p>
                    {job.arbeitsort?.plz || ""}{" "}
                    {job.arbeitsort?.ort || "Ort nicht verfügbar"}
                  </p>
                </div>
                <p>
                  Veröffentlicht:{" "}
                  {job.aktuelleVeroeffentlichungsdatum
                    ? formatDate(job.aktuelleVeroeffentlichungsdatum)
                    : "Kein Datum"}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-xl mt-5">Loading jobs...</p>
      )}
    </div>
  );
}
