const mongoose = require("mongoose");

const MONGO_URL =
  "mongodb+srv://cwvluser:cwvluserpass@cluster0.amv2m7i.mongodb.net/?retryWrites=true&w=majority";

const db = async () => {
  await mongoose
    .connect(MONGO_URL)
    .then(() => console.log("DB Funcionando"))
    .catch((error) => console.error(error));
};

module.exports = db;