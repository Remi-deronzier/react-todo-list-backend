const express = require("express");
const router = express.Router();
const cloudinary = require("cloudinary").v2;

const Task = require("../models/Task");

// CREATE

// Create a new task
app.post("/create", async (req, res) => {
  console.log("route : /create");
  console.log(req.fields);
  try {
    const newTask = new Task({
      name: req.fields.task,
      done: req.fields.done,
    });
    await newTask.save();
    res.status(200).json(newTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// READ

// Read all the tasks
app.get("/", async (req, res) => {
  console.log("route : /");
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// UPDATE

// Update a task
app.post("/update", async (req, res) => {
  console.log("route: /update");
  console.log(req.fields);
  try {
    const task = await Task.findById(req.fields.id);
    task.done = req.fields.done;
    await task.save();
    res.status(200).json({ message: "Task successfully updated" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE

// Delete a task
app.post("/delete", async (req, res) => {
  console.log("route : /delete");
  console.log(req.fields);
  try {
    await Task.findByIdAndDelete(req.fields.id);
    res.status(200).json({ message: "Task successfully deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
