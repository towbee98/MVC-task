const mongoose = require("mongoose");
const config = require("../config");

const connectDatabase = (cb) => {
  try {
    mongoose.connect(config.MONGO_URI, {}, () => {
      console.log("Mongodb connected");
      cb();
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDatabase;
