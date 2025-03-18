import express from "express";
import {
  addFood,
  DeleteFood,
  getFood,
  getFoods,
  putFood,
} from "../Controller/foodController";
const route = express.Router();
route.post("/", addFood);
// route.get("/", getFood);
route.get("/", getFoods);
route.delete("/:id", DeleteFood);
route.put("/:id", putFood); //5
export default route;
