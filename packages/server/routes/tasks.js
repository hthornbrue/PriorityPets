const express = require("express");
const { Task } = require("../models");

const router = express.Router();

router.get('/tasks', async (request, response) => {
    try {
        const tasks = await Task.find().exec();
        response.json(tasks);
    } catch (error) {
        response.status(500).json({ error: 'An error occurred when retrieving tasks.' });
    }
});

router.post('/tasks', async (request, response) => {
    const { name, description, dueDate, priority, completed, category, user } = request.body;

    const newTask = new Task({
        name,
        description,
        dueDate,
        priority,
        completed,
        category,
        user
    });

    try {
        await newTask.save();
        response.json(newTask);
    } catch (error) {
        response.status(500).json({ error: 'An error occurred when creating the task.' });
    }
});

module.exports = router;
