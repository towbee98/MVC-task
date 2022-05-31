const mongoose = require("mongoose");

const ProductModel = mongoose.Schema({
  //   _id: mongoose.Types.ObjectId,
  name: {
    type: String,
    required: [true, "name cannot be empty"],
    unique: [true, "name cannot be duplicate"],
  },
  category: {
    type: String,
    enum: {
      values: ["Gadgets", "Clothes", "Food", "Others"],
      message: "{VALUE} is not available",
    },
  },
  price: {
    type: Number,
    required: [true, "Price cannot be empty"],
    min: [1, "Enter a valid price"],
  },
  quantity: {
    type: Number,
    min: [1, "Quantity cannot be negative"],
    default: 1,
  },
});

module.exports = mongoose.model("product", ProductModel);
