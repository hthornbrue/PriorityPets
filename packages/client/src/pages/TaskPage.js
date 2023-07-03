import React from "react";
import TaskManagement from "../components/TaskManagement";
import NavBar from "../components/Navbar.js";
import './TaskPage.css'

function TaskPage() {
  return (
    <div className="mainTaskDiv" >
      <NavBar />
      <h1 style={{ color: "white", fontWeight: "bold", fontSize: "60px" }}> 
        User's Priorities 
      </h1>
      <TaskManagement />
    </div>
  );
}

export default TaskPage;



