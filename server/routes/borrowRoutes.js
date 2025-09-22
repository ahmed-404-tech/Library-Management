const express = require("express");
const router = express.Router();

const {
  createBorrow,
  getAllBorrow,
  getOneBorrow,
  deleteBorrow,
} = require("../controllers/borrowController");

router.post("/borrow", createBorrow);
router.get("/borrow", getAllBorrow);
router.get("/borrow/:id", getOneBorrow);
router.delete("/borrow/:id", deleteBorrow);

module.exports = router;
