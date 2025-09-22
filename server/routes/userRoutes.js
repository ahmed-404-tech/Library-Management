const express = require("express");
const router = express.Router();
const {
  createUser,
  deleteUser,
  updateUser,
  getUsers,
  getOneUser,
} = require("../controllers/userController");

router.post("/user", createUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);
router.get("/user", getUsers);
router.get("/user/:id", getOneUser);

module.exports = router;
