import express from "express";
<<<<<<< HEAD
import { getMovies } from "./database/mongodb";

const app = express();
const port = 9999;
=======
import cors from "cors";

import bodyParser from "body-parser";
import { userRoute } from "./routes/user.route";
import { productRoute } from "./routes/product.route";

const app = express();
const port = 9999;
app.use(bodyParser.json());

app.use("/user", userRoute);
app.use("/product", productRoute);
>>>>>>> c845910f76fad51167eca666b5e9679b55fa74f8

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/movies", async (req, res) => {
  try {
    const { year, imdb } = await req.query;
    const movies = await getMovies(Number(year), Number(imdb));
    res.status(200).json({ message: "success", movies: movies });
  } catch (error) {
    res.status(500).json({ message: "error", error });
  }
});

app.listen(9999, () => {
  console.log(`Server running on port ${9999}`);
});
