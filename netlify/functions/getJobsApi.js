"use strict";

export async function handler(event) {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: "",
    };
  }

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

  try {
    const response = await fetch(url, {
      headers: {
        "X-API-Key": process.env.JOBBOERSE_API_KEY,
      },
    });

    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify(data.stellenangebote || []),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({ error: "Jobs konnten nicht geladen werden" }),
    };
  }
}
