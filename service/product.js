const productRepo = require("../repository/productRepo");
const AppError = require("../utils/ErrorHandler");

exports.create = async (data) => {
  try {
    if (!data.name || !data.category || !data.price || !data.quantity) {
      throw new AppError("Validation error", 400);
    }
    const product = await productRepo.create(data);

    return product;
  } catch (error) {
    throw error;
  }
};

exports.getAll = async () => {
  try {
    products = await productRepo.getAll();
    return products;
  } catch (error) {
    throw error;
  }
};

exports.getAnItem = async (id) => {
  try {
    if (!id) throw new AppError("Please enter a vaild id", 400);
    product = await productRepo.findById(id);
    if (!product) throw new AppError("Product not found");
    return product;
  } catch (error) {
    throw error;
  }
};

exports.updateProduct = async (id, { name, category, price, quantity }) => {
  try {
    const dataToUpdate = { name, category, price, quantity };
    if (!id) throw new AppError("Please enter a valid id", 400);
    product = await productRepo.updateProduct(id, dataToUpdate);
    if (!product) throw new AppError("Product cannot be found", 400);
    return product;
  } catch (error) {
    throw error;
  }
};

exports.removeProduct = async (id) => {
  try {
    const productId = id;
    if (!productId) throw new AppError("Please enter a valid id", 400);
    const product = await productRepo.deleteProduct(productId);
    return product;
  } catch (error) {
    throw error;
  }
};
