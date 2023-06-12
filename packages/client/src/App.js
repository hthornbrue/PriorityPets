import React, { useState, useEffect } from "react";
import moment from "moment";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import TaskPage from "./pages/TaskPage";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState(null);
  const [reminder, setReminder] = useState(new Date());

  const handleAddTask = () => {
    const newTask = {
      title,
      description,
      priority,
      dueDate,
      reminder,
      completed: false,
    };

    setTasks([...tasks, newTask]);

    // Clear input fields
    setTitle("");
    setDescription("");
    setPriority("");
    setDueDate(null);
    setReminder(new Date());
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleCompleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    setTasks(updatedTasks);
  };

  useEffect(() => {
    tasks.forEach((task) => {
      if (!task.completed && task.reminder && task.dueDate) {
        const now = moment();
        const reminderTime = moment(task.dueDate).subtract(moment(task.reminder).hours(), "hours").subtract(moment(task.reminder).minutes(), "minutes");

        if (now.isSameOrAfter(reminderTime)) {
          setTimeout(() => {
            alert(`Reminder: ${task.title}`);
          }, reminderTime.diff(now));
        }
      }
    });
  }, [tasks]);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Task Manager</h1>
      <div className="mb-3">
        <input type="text" className="form-control mb-2" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea className="form-control mb-2" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <select className="form-control mb-2" value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="">Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <DateTimePicker className="form-control mb-2" value={dueDate} onChange={(date) => setDueDate(date)} placeholder="Due Date" />
        <DateTimePicker className="form-control mb-2" value={reminder} onChange={(date) => setReminder(date)} placeholder="Reminder" />
        <button className="btn btn-primary" onClick={handleAddTask}>
          Add Task
        </button>
      </div>
      <div>
        {tasks.map((task, index) => (
          <div key={index} className="card mb-3">
            <div className="card-body">
              <h2 className="card-title">{task.title}</h2>
              {task.description && <p className="card-text">{task.description}</p>}
              <p className="card-text">Priority: {task.priority}</p>
              <p className="card-text">Due Date: {task.dueDate ? moment(task.dueDate).format("YYYY-MM-DD HH:mm") : "-"}</p>
              <p className="card-text">Reminder: {task.reminder ? moment(task.reminder).format("YYYY-MM-DD HH:mm") : "-"}</p>
              {!task.completed && (
                <button className="btn btn-success mr-2" onClick={() => handleCompleteTask(index)}>
                  Mark as Completed
                </button>
              )}
              <button className="btn btn-danger" onClick={() => handleDeleteTask(index)}>
                Delete Task
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  <Routes>
    <Route path="/" element={<TaskPage />} />
  </Routes>;
}

export default App;
