const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB Connected");
  } catch (error) {
    console.error(`Error to connect to DB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
