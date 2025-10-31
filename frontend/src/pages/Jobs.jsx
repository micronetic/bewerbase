import { useEffect } from "react";

export default function Jobs() {
  useEffect(() => {
    async function getData() {
      const url =
        "https://rest.arbeitsagentur.de/jobboerse/jobsuche-service/pc/v4/jobs" +
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
          throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
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
    </div>
  );
}
