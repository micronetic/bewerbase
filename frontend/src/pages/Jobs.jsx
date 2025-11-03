import { useEffect, useState } from "react";

export default function Jobs() {
  const [stellen, setStellen] = useState([]);

  useEffect(() => {
    async function getData() {
      const url =
        "https://corsproxy.io/?url=https://rest.arbeitsagentur.de/jobboerse/jobsuche-service/pc/v4/jobs" +
        "?angebotsart=1" +
        "&wo=Köln" +
        "&was=Webentwickler" +
        "&umkreis=50" +
        "&arbeitszeit=vz" +
        "&page=1" +
        "&size=25" +
        "&pav=false";
      try {
        const response = await fetch(url, {
          headers: {
            "X-API-Key": "jobboerse-jobsuche",
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const result = await response.json();
        // console.log(result.stellenangebote);
        setStellen(result.stellenangebote || []);
      } catch (error) {
        console.log(error.message);
      }
    }

    getData();
  }, []);
  return (
    <div className="flex flex-col items-center gap-y-4">
      <h2 className="text-3xl capitalize mb-3">Arbeitsagentur Jobsuche API</h2>
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
                  <span className="text-sm font-normal italic text-accent">
                    {job.titel || "Wo Titel"}
                  </span>
                </h3>
                <div>
                  <p>{job.arbeitgeber || "Unbekannter Arbeitgeber"}</p>
                  <div className="flex gap-x-2">
                    <p>{job.arbeitsort?.plz || "PLZ nicht verfügbar - "},</p>
                    <p>{job.arbeitsort?.ort || "Ort nicht verfügbar"}</p>
                  </div>
                  <p>Eintrittsdatum: {job.eintrittsdatum || "Kein Datum da"}</p>
                  <p>
                    Veröffentlicht:{" "}
                    {job.aktuelleVeroeffentlichungsdatum || "Kein Datum da"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          "Keine Jobs gefunden..."
        )}
      </div>
    </div>
  );
}
