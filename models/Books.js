const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
    maxLength: 50,
  },
  createBook: {
    type: Date,
    require: true,
    default: Date.now(),
  },
  updateBook: {
    type: Date,
    require: true,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Books", booksSchema);
