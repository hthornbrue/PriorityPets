import React, { useEffect, useState } from "react";
import TaskManagement from "../components/TaskManagement";
import NavBar from "../components/Navbar.js";
import { getUserTasks } from "../routes/tasks"; // Update the import path to match the location of the `getUserTasks` function

function TaskPage() {
  const [userTasks, setUserTasks] = useState([]);

  useEffect(() => {
    const fetchUserTasks = async () => {
      try {
        const tasks = await getUserTasks();
        setUserTasks(tasks);
      } catch (error) {
        console.error("Error fetching user tasks:", error);
      }
    };

    fetchUserTasks();
  }, []);

  return (
    <div style={{ backgroundColor: "green", width: "100vw", height: "100vh" }}>
      <NavBar />
      <h1 style={{ color: "white", fontWeight: "bold", fontSize: "60px" }}>
        User's Priorities
      </h1>
      <TaskManagement tasks={userTasks} />
    </div>
  );
}

export default TaskPage;
