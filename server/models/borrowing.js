const mongoose = require("mongoose");
const Book = require("./books");

const borrowingSchema = mongoose.Schema({
  book: {
    type: String,
    required: true,
  },
  member: {
    type: String,
    required: true,
    trim: true,
  },
  borrowedAt: {
    type: Date,
    default: Date.now,
  },
  returnDate: {
    type: Date,
    required: true,
  },
  returned: {
    type: Boolean,
    default: false,
  },
});

const Borrow = mongoose.model("Borrow", borrowingSchema);

module.exports = Borrow;
