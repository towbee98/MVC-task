const ProductModel = require("../models/Product");

exports.create = async ({ name, category, price, quantity }) => {
  const product = new ProductModel({
    name,
    category,
    price,
    quantity,
  });
  return product.save();
};

exports.findById = async (id) => {
  const products = await ProductModel.findById(id);
  return products;
};

exports.getAll = async () => {
  const products = await ProductModel.find();
  return products;
};

exports.updateProduct = async (id, { name, category, price, quantity }) => {
  const update = { name, category, price, quantity };
  const product = await ProductModel.findByIdAndUpdate(
    id,
    {
      ...update,
    },
    { runValidators: true, new: true }
  );
  return product;
};

exports.deleteProduct = async (id) => {
  return await ProductModel.findByIdAndDelete(id);
};
