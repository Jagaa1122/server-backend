import { RequestHandler } from "express";
import { Products } from "../database/product.db";

export const newProduct: RequestHandler = (req, res) => {
  const { name, price, description, stock, category} = req.body;

  const findproduct = Products.find((product) => product.name === name);
  if (findproduct) {
    res.send("Product already exist");
    return;
  }

  const lastproduct = Products[Products.length - 1];
  const newproductId = lastproduct?._id ? Number(lastproduct._id) + 1 : 1;

  const newproduct = { _id: newproductId.toString(), name, price, description, stock, category };

  Products.push(newproduct);
    res.status(200).json({ 
    message: "Product added successfully",
    data: Products 
});
};



export const singleProduct: RequestHandler = (req, res) => {
  const { _id } = req.body;
  const idFinder = Products.find((product) => product._id === _id);

  if (!idFinder) {
    res.send("No product found");
    return;
  }

  res.status(200).json({ idFinder, massage: "Success" });
};

export const allProduct: RequestHandler = (req, res) => {
  const productFinder = Products;

   if (!productFinder) {
    res.send("No product found");
    return;
  }
  res.status(200).json({ productFinder, massage: "Success" });
 
};

export const updateProduct: RequestHandler = (req, res) => {
  const { _id } = req.body;
  const product = Products.find((product) => product._id === _id);

  if (!product) {
    res.send("No product found");
    return;
  }

  Object.assign(product, req.body);
  res.send({ data: product});
};

export const deleteProduct: RequestHandler = (req, res) => {
  const { _id } = req.body;
      const productIndex = Products.findIndex((product) => product._id === _id);
      if (productIndex === -1) {
      res.send("No product found");
      return;
  }
  const deletedProduct = Products.splice(productIndex, 1)[0];
  res.status(200).json({ 
      message: "Product deleted successfully"
     
  });
};