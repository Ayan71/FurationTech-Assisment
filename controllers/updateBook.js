const Books = require("../models/books");

exports.updateBooks = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const books = await Books.findByIdAndDelete(
      {
        _id: id,
      },
      { title, description, updateBook: Date.now() }
    );
    res.status(200).json({
      sucess: true,
      data: books,
      message: "Update Successfully",
    });
  } catch (err) {
    console.error(err);
    res.send(500).json({
      sucess: false,
      error: err.message,
      message: "Server error",
    });
  }
};
