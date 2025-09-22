const Book = require("../models/books");

const addBook = async (req, res) => {
  const { title, author, category, language, addedAt } = req.body;

  try {
    const book = new Book({ title, author, category, language, addedAt });
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    console.log("Error to add book");
    res.status(500).json({ message: "error to adding book" });
  }
};

const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    console.log("Error to getting books");
    res.status(500).json({ message: "Error to get books" });
  }
};

const deleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findByIdAndDelete(id);
    res.status(200).json(book);
  } catch (error) {
    console.log("Error to delete book");
    res.status(500).json({ message: "Error to delete books" });
  }
};

const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, category, language, addedAt } = req.body;

  try {
    const editedBook = await Book.findByIdAndUpdate(
      id,
      { title, author, category, language, addedAt },
      { new: true }
    );
    res.status(200).json(editedBook);
  } catch (error) {
    console.log("Error to update book");
    res.status(500).json({ message: "Error to update books" });
  }
};

const getOneBook = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findById(id);
    res.status(200).json(book);
  } catch (error) {
    console.log("Error to get book");
    res.status(500).json({ message: "Error to get book" });
  }
};

module.exports = { addBook, deleteBook, updateBook, getBooks, getOneBook };
