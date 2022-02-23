const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/images");
    console.log("Connected Successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
