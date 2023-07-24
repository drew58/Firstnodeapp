const mongoose = require("mongoose");
const mongoDb = "mongodb+srv://andrewenahoro2019:Diego12345@cluster0.lcy4qdc.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoDb, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) {
    console.error("MongoDB connection error:", err);
  } else {
    console.log("Connected to MongoDB cluster");
  }
});

const books_data = require("../db/books.json");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

exports.index = function (req, res) {
  return books_data;
};

