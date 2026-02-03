"use strict";

import cors from "cors";
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/api/jobs", async function (req, res) {
  try {
    const queryParameter = new URLSearchParams(req.query);
    const link = `https://rest.arbeitsagentur.de/jobboerse/jobsuche-service/pc/v4/jobs?${queryParameter}`;
    const response = await fetch(link, {
      headers: {
        "X-API-Key": "jobboerse-jobsuche",
      },
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.log(error.message);
    console.log(error.name);
  }
});

app.listen(PORT, function () {
  console.log(`Läuft auf port: ${PORT}`);
});
