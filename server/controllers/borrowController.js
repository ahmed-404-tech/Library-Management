const Borrow = require("../models/borrowing");
const Book = require("../models/books");

const createBorrow = async (req, res) => {
  const { book, member, returnDate } = req.body;
  
  try {
    const borrow = new Borrow({
      book,
      member,
      returnDate,
    });

    await borrow.save();
    res.status(201).json({ message: "Book borrowed successfully", borrow });
  } catch (error) {
    console.log("Error creating borrow:", error);
    res.status(500).json({ message: "Error creating borrow" });
  }
};

const getAllBorrow = async (req, res) => {
  try {
    const borrows = await Borrow.find().populate("book").exec();
    res.status(200).json(borrows);
  } catch (error) {
    console.log("Error getting borrows:", error);
    res.status(500).json({ message: "Error getting borrows" });
  }
};

const getOneBorrow = async (req, res) => {
  const { id } = req.params;

  try {
    const borrow = await Borrow.findById(id).populate("book").exec();

    if (!borrow) {
      return res.status(404).json({ message: "Borrow record not found" });
    }

    res.status(200).json(borrow);
  } catch (error) {
    console.log("Error getting borrow:", error);
    res.status(500).json({ message: "Error getting borrow" });
  }
};

const deleteBorrow = async (req, res) => {
  const { id } = req.params;

  try {
    const borrow = await Borrow.findByIdAndDelete(id);
    res.status(200).json({ message: `Borrow Deleted ${borrow}` });
  } catch (error) {
    console.log("Error deleting borrow", error);
    res.status(500).json({ message: "error deleting borrow" });
  }
};

module.exports = { createBorrow, getAllBorrow, getOneBorrow, deleteBorrow };