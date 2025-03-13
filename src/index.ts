import express from "express";
import { configDotenv } from "dotenv";
import bodyParser from "body-parser";
import { connectDataBase } from "./food/DB/database";
import categoryRouter from "./category/routes/user.route";
import route from "../src/food/Router/foodRouters";
import cors from "cors";
const app = express();
app.use(bodyParser.json());
app.use(cors());

configDotenv(); //SUULGAD DUUDAJ OGNO
connectDataBase(); // DB AASA AVNA
const port = process.env.PORT;
app.use("/category", categoryRouter); //<1 GANTS APP.USE  NER NI YUCH BAIJ BOLNO
app.use("/food", route); //<1 GANTS APP.USE  NER NI YUCH BAIJ BOLNO

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
