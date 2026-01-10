"use strict";

export async function getJobsApi() {
  const url =
    "https://rest.arbeitsagentur.de/jobboerse/jobsuche-service/pc/v4/jobs" +
    "?angebotsart=1" +
    "&wo=Köln" +
    "&was=Frontend-Entwickler/in" +
    "&umkreis=50" +
    "&arbeitszeit=vz" +
    "&page=1" +
    "&size=25" +
    "&pav=false";

  const response = await fetch(url, {
    headers: {
      "X-API-Key": process.env.JOBBOERSE_API_KEY,
    },
  });

  const result = await response.json();
  // console.log(result.stellenangebote);
  return {
    statusCode: 200,
    body: JSON.stringify(result.stellenangebote || []),
  };
}
