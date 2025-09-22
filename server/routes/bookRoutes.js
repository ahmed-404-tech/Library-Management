const express = require("express");
const router = express.Router();

const {
  addBook,
  deleteBook,
  updateBook,
  getBooks,
  getOneBook,
} = require("../controllers/booksController");

router.post("/book", addBook);
router.get("/book", getBooks);
router.get("/book/:id", getOneBook);
router.put("/book/:id", updateBook);
router.delete("/book/:id", deleteBook);

module.exports = router;
