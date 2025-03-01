require("dotenv").config();
const express = require("express");
const blogRouter = require("./routes/blogRoutes");
const { connectDB } = require("./config/db");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

connectDB();

app.use("/api/tasks", blogRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
