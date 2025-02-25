import express from "express";
import { getMovies } from "./database/createStudent";

const app = express();
const port = 9999;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/students", async (req, res) => {
  try {
    // const { year, imdb } = await req.query;
    const movies = await getMovies();
    res.status(201).json({ message: "success", movies: movies });
  } catch (error) {
    res.status(500).json({ message: "error", error });
  }
});

app.listen(9999, () => {
  console.log(`Server running on port ${9999}`);
});
