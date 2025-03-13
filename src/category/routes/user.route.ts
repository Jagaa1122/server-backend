import express from "express";
import {
  CreateCategory,
  deleteCategories,
  getCategories,
  updateCategories,
} from "../controllers/createCategories";

const categoryRouter = express.Router();
categoryRouter.post("/", CreateCategory);
categoryRouter.get("/", getCategories);
categoryRouter.delete("/:id", deleteCategories);
categoryRouter.put("/:id", updateCategories);

export default categoryRouter;
