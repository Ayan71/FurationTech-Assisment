const Books = require("../models/books");

exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    await Books.findByIdAndDelete(id);
    res.json({
      success: true,
      message: "Books Deelete",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "server error",
    });
  }
};
