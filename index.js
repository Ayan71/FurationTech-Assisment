const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 2000;

//middleware
app.use(express.json());

const book = require("./routes/books");
app.use("/api/v1", book);

const dbConnect = require("./confiq/database");
dbConnect();

app.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
});
