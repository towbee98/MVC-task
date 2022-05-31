const productRoute = require("express").Router();
const productService = require("../service/product");
const responseHandler = require("../utils/ResponseHandler");

productRoute.post("/product", async (req, res, next) => {
  try {
    const data = req.body;
    const product = await productService.create(data);
    responseHandler(res, 201, product, "Product created successfully");
  } catch (error) {
    next(error);
  }
});

productRoute.get("/product", async (req, res, next) => {
  try {
    const products = await productService.getAll();
    responseHandler(res, 200, products, "Products fetched succesfully");
  } catch (error) {
    next(error);
  }
});

productRoute.get("/product/:id", async (req, res, next) => {
  try {
    const productId = req.params.id;
    const product = await productService.getAnItem(productId);
    responseHandler(res, 200, product, "Product fetched succesfully");
  } catch (error) {
    next(error);
  }
});

productRoute.patch("/product/:id", async (req, res, next) => {
  try {
    const productId = req.params.id;
    const { name, category, price, quantity } = { ...req.body };
    const product = await productService.updateProduct(productId, {
      name,
      category,
      price,
      quantity,
    });
    responseHandler(res, 200, product, "Product updated succsfully");
  } catch (error) {
    next(error);
  }
});

productRoute.delete("/product/:id", async (req, res, next) => {
  try {
    const productId = req.params.id;
    const product = await productService.removeProduct(productId);
    responseHandler(res, 204, product, "Product removed succesfully");
  } catch (error) {
    next(error);
  }
});
module.exports = productRoute;
