const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const bookRoutes = require("./routes/bookRoutes");
const userRoutes = require("./routes/userRoutes");
const borrowRoutes = require("./routes/borrowRoutes");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api", bookRoutes);
app.use("/api", userRoutes);
app.use("/api", borrowRoutes);

app.listen(port, () => {
  console.log(`Server listenning on Port: ${port}`);
});
