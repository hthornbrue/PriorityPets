import React, { useState } from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState(null);
  const [reminder, setReminder] = useState("");

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
    setReminder("");
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

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="">Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <DatePicker
          selected={dueDate}
          onChange={(date) => setDueDate(date)}
          placeholderText="Due Date"
        />
        <input
          type="text"
          placeholder="Reminder"
          value={reminder}
          onChange={(e) => setReminder(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div>
        {tasks.map((task, index) => (
          <div key={index}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>Priority: {task.priority}</p>
            <p>
              Due Date:{" "}
              {task.dueDate ? moment(task.dueDate).format("YYYY-MM-DD") : "-"}
            </p>
            <p>Reminder: {task.reminder}</p>
            {!task.completed && (
              <button onClick={() => handleCompleteTask(index)}>
                Mark as Completed
              </button>
            )}
            <button onClick={() => handleDeleteTask(index)}>Delete Task</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
