"use strict";

const BASE_URL = "https://bewerbase.onrender.com/api/jobs";

export async function getJobsApi() {
  try {
    const parameter = new URLSearchParams({
      was: "Frontend-Entwickler/in",
      wo: "Köln",
      umkreis: 50,
      angebotsart: 1,
      size: 25,
      arbeitszeit: "vz",
      pav: false,
      page: 1,
    });

    const response = await fetch(`${BASE_URL}?${parameter.toString()}`);
    const data = await response.json();
    return data.stellenangebote || [];
  } catch (error) {
    console.error("Fehler beim Laden der Jobs:", error.message);
    return [];
  }
}
