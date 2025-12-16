export async function getJobsApi() {
  const url =
    "https://corsproxy.io/?url=https://rest.arbeitsagentur.de/jobboerse/jobsuche-service/pc/v4/jobs" +
    "?angebotsart=1" +
    "&wo=Köln" +
    "&was=Frontend-Entwickler/in" +
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
    return result.stellenangebote || [];
  } catch (error) {
    console.log(error.message);
    console.log(error.name);
  }
}
