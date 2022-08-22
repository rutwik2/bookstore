import asyncHandler from "express-async-handler";
import Product from "../model/productModel.js";

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

const getProductById = asyncHandler(async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(400).json("Product Not Found");
    }
  } catch (error) {
    console.error(`${error}`);
    res.status(500).json("something went wrong");
  }
});

export { getProducts, getProductById };
