const Books = require("../models/books");

exports.createBook = async (req, res) => {
  try {
    //extract tile and describtion from request body

    const { title, description } = req.body;
    // create a new  todo obg and insert in Db
    const response = await Books.create({ title, description });

    // send the ajson response with the success flag

    res.status(200).json({
      success: true,
      data: response,
      message: "Entery Create Sucessfulyy",
    });
  } catch {
    res.status(500).json({
      success: false,
      data: "Internal server error",
    });
  }
};
