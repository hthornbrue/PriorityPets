import express from "express";
import { Task } from "../models";

const router = express.Router();

router.get("/", async (request, response) => {
  try {
    const tasks = await Task.find().exec();
    response.json(tasks);
  } catch (error) {
    response.status(500).json({ error: "An error occurred when retrieving tasks." });
  }
});

router.post("/", async (request, response) => {
  const { name, description, priority, category, dueDate, completed, reminder, user } = request.body;

  if (!name || !dueDate || !user) {
    return response.status(400).json({ error: "Required fields are missing." });
  }

  const newTask = new Task({
    name,
    description,
    priority,
    category,
    dueDate,
    completed,
    reminder,
    user,
  });

  try {
    await newTask.save();
    response.json(newTask);
  } catch (error) {
    response.status(500).json({ error: "An error occurred when creating the task." });
  }
});

module.exports = router;
