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
        console.log(result);
        setStellen(result.stellenangebote || []);
      } catch (error) {
        console.log(error.message);
      }
    }

    getData();
  }, []);
  return (
    <div className="flex flex-col items-center gap-y-4">
      <h2 className="text-3xl capitalize">jobs aus der API sind hier</h2>
      <p>Arbeitsamt API checken</p>
      <div>
        {stellen.length > 0 ? (
          <div className="grid grid-cols-3 gap-3">
            {stellen.map((job, index) => (
              <div key={index} className="bg-dark-secondary p-4 rounded-xl">
                <h3 className="font-bold text-xl mb-1.5">
                  {job.beruf || "Kein Titel"}
                </h3>
                <p>{job.arbeitgeber || "Unbekannter Arbeitgeber"}</p>
                <p>{job.arbeitsort?.ort || "Ort nicht verfügbar"}</p>
                <p>Eintrittsdatum: {job.eintrittsdatum || "Kein Datum da"}</p>
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
