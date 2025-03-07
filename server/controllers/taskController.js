const Task = require("../models/Task");

const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find();

    if (!tasks) {
      res.status(404).json({ message: "No tasks found" });
    }

    res.status(200).json({
      status: "success",
      results: tasks.length,
      data: tasks,
    });
  } catch (err) {
    res.status(400).json({ err });
  }
};

const createTask = async (req, res, next) => {
  try {
    const newTask = await Task.create(req.body);

    res.status(201).json({
      status: "success",
      message: "Task created successfully",
      data: newTask,
    });
  } catch (err) {
    res.status(400).json({ err });
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.taskId);

    if (!task) {
      res.status(404).json({ message: "No tasks found with that ID" });
    }

    res.status(200).json({
      status: "success",
      message: "Task deleted successfully",
    });
  } catch (err) {
    res.status(400).json({ err });
  }
};

module.exports = { getAllTasks, createTask, deleteTask };
