import { Router } from "express";
import { newProduct, allProduct, singleProduct, updateProduct,deleteProduct} from "../controllers/product.controller";

const productRoute = Router();
productRoute
  .post("/new", newProduct)
  .post("/all", allProduct )
  .post("/single", singleProduct)
  .post("/update", updateProduct)
  .post("/delete", deleteProduct);
export { productRoute };
