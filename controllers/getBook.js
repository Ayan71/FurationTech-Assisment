const Books = require("../models/books");

exports.getBook = async (req, res) => {
  try {
    //fetch all books from database\
    const books = await Books.find({});

    res.status(200).json({
      sucess: true,
      data: books,
      message: "Entire books is fetch",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      sucess: false,
      error: err.message,
      message: "Server error",
    });
  }
};
