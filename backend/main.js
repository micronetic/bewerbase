"use strict";

import axios from "axios";
import cors from "cors";
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/api/jobs", async (req, res) => {
  try {
    const response = await axios.get(
      "https://rest.arbeitsagentur.de/jobboerse/jobsuche-service/pc/v4/jobs",
      {
        params: req.query,
        headers: {
          "X-API-Key": process.env.X_API_KEY,
          // "X-API-Key": "jobboerse-jobsuche",
        },
      },
    );

    res.json(response.data);
  } catch (error) {
    console.log(error.message);
    console.log(error.name);
  }
});

app.listen(PORT, () => {
  console.log(`Läuft auf port: ${PORT}`);
});
