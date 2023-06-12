import React, { useState, useEffect } from "react";
import moment from "moment";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import "./TaskManagement.css";

function TaskManagement() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState(null);
  const [reminder, setReminder] = useState(new Date());
  const [show, setShow] = useState(false);

  let taskColor;

  switch (priority) {
    case "high":
      taskColor = "red";
      break;
    case "medium":
      taskColor = "orange";
      break;
    case "low":
      taskColor = "green";
      break;
    default:
      taskColor = "lightgrey";
  }

  const openModal = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

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
        const reminderTime = moment(task.dueDate)
          .subtract(moment(task.reminder).hours(), "hours")
          .subtract(moment(task.reminder).minutes(), "minutes");

        if (now.isSameOrAfter(reminderTime)) {
          setTimeout(() => {
            alert(`Reminder: ${task.title}`);
          }, reminderTime.diff(now));
        }
      }
    });
  }, [tasks]);

  return (
    <>
      <Button className="modalButton" onClick={openModal}>
        Add Task
      </Button>
      <Modal className="modal" show={show} onHide={closeModal}>
        <div
          className="container mt-5"
          style={{ backgroundColor: "darkgreen" }}
        >
          <h1 className="mb-4" style={{ color: "white" }}>
            Task Manager
          </h1>
          <div className="mb-3">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              className="form-control mb-2"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <select
              className="form-control mb-2"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="">Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <DateTimePicker
              className="form-control mb-2"
              value={dueDate}
              onChange={(date) => setDueDate(date)}
              placeholder="Due Date"
            />
            <DateTimePicker
              className="form-control mb-2"
              value={reminder}
              onChange={(date) => setReminder(date)}
              placeholder="Reminder"
            />
            <Button className="float-right mt-3" onClick={handleAddTask}>
              Add Task
            </Button>
            <Button
              className="float-right mt-3"
              style={{ marginLeft: "20px" }}
              onClick={closeModal}
            >
              Close
            </Button>
          </div>
        </div>
      </Modal>

      {tasks.map((task, index) => (
        <div key={index} className="listDiv">
          <ol>
            <li
              className="task"
              style={{
                backgroundColor: taskColor,
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              <div className="holder">
                {!task.completed && (
                  <input
                    type="checkbox"
                    name="completed"
                    className="completed"
                    checked={task.completed}
                    onChange={() => handleCompleteTask(index)}
                  />
                )}
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: "bold",
                    marginLeft: "5px",
                  }}
                >
                  check complete
                </span>
                <h2 className="title">{task.title}</h2>
                {task.description && (
                  <div className="description main">{task.description}</div>
                )}
                <br></br>
                <div className="main">
                  <span className="priority">Priority: {task.priority}</span>
                  <br></br>
                  <span className="para">
                    Due Date:{" "}
                    {task.dueDate
                      ? moment(task.dueDate).format("YYYY-MM-DD HH:mm")
                      : "-"}
                  </span>
                  <br></br>
                  <span className="para">
                    Reminder:{" "}
                    {task.reminder
                      ? moment(task.reminder).format("YYYY-MM-DD HH:mm")
                      : "-"}
                  </span>
                </div>

                <button
                  className="btn btn-danger deleteButtonTask"
                  style={{ marginLeft: "20px" }}
                  onClick={() => handleDeleteTask(index)}
                >
                  Delete Task
                </button>
              </div>
            </li>
          </ol>
        </div>
      ))}
    </>
  );
}

export default TaskManagement;
