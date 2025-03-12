import express from "express";
import {
  addFood,
  DeleteFood,
  getFood,
  putFood,
} from "../Controller/foodController";
const route = express.Router();
route.post("/", addFood);
route.get("/:id", getFood);
route.delete("/:id", DeleteFood);
route.put("/:id", putFood); //5
export default route;
