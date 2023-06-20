import React from "react";
import TaskManagement from "../components/TaskManagement";
import NavBar from "../components/NavBar.js";

function TaskPage() {
  return (
    <div style={{ backgroundColor: "green", width: "100vw", height: "100vh" }}>
      <NavBar />
      <h1 style={{ color: "white", fontWeight: "bold", fontSize: "60px" }}> 
        User's Priorities 
      </h1>
      <TaskManagement />
    </div>
  );
}

export default TaskPage;



//eventualy  make the User {$userName}