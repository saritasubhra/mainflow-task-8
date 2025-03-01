const express = require("express");
const {
  getAllTasks,
  createTask,
  deleteTask,
} = require("../controllers/taskController");

const router = express.Router();

router.route("/").get(getAllTasks).post(createTask);
router.route("/:taskId").delete(deleteTask);

module.exports = router;
