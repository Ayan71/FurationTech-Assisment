const express = require("express");

const router = express.Router();

//import controller

const { createBook } = require("../controllers/createBook");
const { deleteBook } = require("../controllers/deleteBook");
const { getBook } = require("../controllers/getBook");
const { updateBooks } = require("../controllers/updateBook");

//define Api route

router.post("/createBook", createBook);
router.get("/getBook", getBook);
router.delete("/deleteBook", deleteBook);
router.put("/updateBooks", updateBooks);

module.exports = router;
