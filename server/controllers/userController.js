const User = require("../models/users");

const createUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const userExists = await User.findOne({ $or: [{ username }, { email }] });

    if (userExists) {
      return res
        .status(400)
        .json({ message: "Username or email already taken" });
    }

    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.log(`Error creating user: ${error}`);
    res.status(500).json({ message: "Error creating user" });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndDelete(id);
    res.status(200).json(user);
  } catch (error) {
    console.log("error delete user");
    res.status(500).json({ message: "Error deleting user" });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.log("error to get users");
    res.status(500).json({ message: "error to get users :(" });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, email, password } = req.body;

  try {
    const newUser = await User.findByIdAndUpdate(
      id,
      { username, email, password },
      { new: true }
    );
    res.status(200).json(newUser);
  } catch (error) {
    console.log("Error to update user");
    res.status(500).json({ message: "error to update user :(" });
  }
};

const getOneUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    console.log("error to get user");
    res.status(500).json({ message: "error to get user" });
  }
};

module.exports = { createUser, deleteUser, updateUser, getUsers, getOneUser };
