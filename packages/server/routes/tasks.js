import express from "express";
import { Task } from "../models";

import axios from "axios";

export async function getUserTasks() {
  try {
    const response = await axios.get("/tasks"); // Update the URL if necessary
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch user tasks");
  }
}


const router = express.Router();

// Retrieve user tasks
router.get("/tasks", async (req, res) => {
  try {
    const userId = req.user.id; // Assuming you have user authentication middleware that sets the user ID in the request object

    const tasks = await Task.find({ user: userId }).exec();
    res.json(tasks);
  } catch (error) {
    console.error("Error fetching user tasks:", error);
    res.status(500).json({ error: "Internal server error occurred while fetching tasks" });
  }
});

// Create a task
router.post("/", async (req, res) => {
  const { name, description, dueDate, priority, completed, category, user } = req.body;

  const newTask = new Task({
    name,
    description,
    dueDate,
    priority,
    completed,
    category,
    user,
  });

  try {
    await newTask.save();
    res.json(newTask);
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ error: "Internal server error occurred when creating the task" });
  }
});

module.exports = router;
