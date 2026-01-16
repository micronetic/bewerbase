"use strict";

import axios from "axios";

const BASE_URL = "http://localhost:3000/api/jobs";

export const getJobsApi = async () => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        was: "Frontend-Entwickler/in",
        wo: "Köln",
        umkreis: 50,
        angebotsart: 1,
        size: 25,
        arbeitszeit: "vz",
        pav: false,
        page: 1,
      },
    });

    return response.data.stellenangebote || [];
  } catch (error) {
    console.error("Fehler beim Laden der Jobs:", error.message);
    return [];
  }
};
