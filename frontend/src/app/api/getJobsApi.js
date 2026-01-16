"use strict";

import axios from "axios";

const BASE_URL = "https://bewerbase.onrender.com/api/jobs";

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
    // console.log(response.data.stellenangebote);
    return response.data.stellenangebote || [];
  } catch (error) {
    console.error("Fehler beim Laden der Jobs:", error.message);
    return [];
  }
};
