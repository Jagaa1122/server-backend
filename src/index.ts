import express from "express";
import { configDotenv } from "dotenv";
import bodyParser from "body-parser";

import random from "../src/food/Router/foodRouters";
import { connectDataBase } from "./food/DB/database";
const app = express();
app.use(bodyParser.json());

configDotenv(); //SUULGAD DUUDAJ OGNO
connectDataBase(); // DB AASA AVNA
const port = process.env.PORT;
app.use("/food", random); //<1 GANTS APP.USE  NER NI YUCH BAIJ BOLNO

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
