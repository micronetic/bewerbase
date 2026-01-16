import { useEffect, useState } from "react";
import { getJobsApi } from "../api/getJobsApi";

export default function Jobs() {
  const [stellen, setStellen] = useState([]);

  useEffect(() => {
    getJobsApi().then(setStellen);
  }, []);
  return (
    <div className="w-full md:max-w-7xl flex flex-col items-center gap-y-4">
      <h2 className="text-3xl capitalize mb-3 text-center">
        Arbeitsagentur Jobsuche API
      </h2>
      <div>
        {stellen.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {stellen.map((job, index) => (
              <div
                key={index}
                className="flex flex-col gap-y-3 bg-dark-secondary p-4 rounded-xl"
              >
                <h3 className="flex flex-col font-bold text-xl mb-1.5">
                  {job.beruf || "beruf"}
                  <span className="text-sm font-normal text-accent">
                    {job.titel || "Wo Titel"}
                  </span>
                </h3>
                <div>
                  <p>{job.arbeitgeber || "Unbekannter Arbeitgeber"}</p>
                  <div className="flex gap-x-2">
                    <p>{job.arbeitsort?.plz || "PLZ nicht verfügbar - "},</p>
                    <p>{job.arbeitsort?.ort || "Ort nicht verfügbar"}</p>
                  </div>
                  <p>
                    Eintrittsdatum:{" "}
                    {job.eintrittsdatum
                      ? new Date(job.eintrittsdatum).toLocaleDateString("de-DE")
                      : "Kein Datum"}
                  </p>
                  <p>
                    Veröffentlicht:{" "}
                    {job.aktuelleVeroeffentlichungsdatum
                      ? new Date(
                          job.aktuelleVeroeffentlichungsdatum,
                        ).toLocaleDateString("de-DE")
                      : "Kein Datum"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xl mt-5">Loading jobs...</p>
        )}
      </div>
    </div>
  );
}
