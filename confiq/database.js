const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(
      "mongodb://127.0.0.1:27017/BookStore" || process.env.DATABASE_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("Database is connected sucessfully"))
    .catch((err) => {
      console.log("Issue in Database");
      console.log(err.message);
    });
};
module.exports = dbConnect;
