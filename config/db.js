const mongoose = require("mongoose");
require("dotenv").config();
const db = process.env.MONGOURI;

const ConnectMongoDB = async () => {
  try {
    await mongoose
      .connect(db, {
        useNewUrlParser: true,
      })
      .then(() => console.log("MongoDB Connected!!"))
      .catch(() => process.exit(1));
  } catch (error) {
    process.exit(1);
  }
};

module.exports = ConnectMongoDB;
