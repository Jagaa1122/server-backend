import express from "express";
import cors from "cors";

import bodyParser from "body-parser";
import { userRoute } from "./routes/user.route";

const app = express();
const port = 9999;
app.use(bodyParser.json());

app.use("/user", userRoute);
// const userRoute = Router();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(9999, () => {
  console.log(`Server running on port ${9999}`);
});
