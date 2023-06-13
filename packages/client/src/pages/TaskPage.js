import React from "react";
import TaskManagement from "../components/TaskManagement";

function TaskPage() {
  return (
    <div style={{ backgroundColor: "green", width: "100vw", height: "100vh" }}>
      <h1 style={{ color: "white", fontWeight: "bold", fontSize: "60px" }}>
        User's Tasks
      </h1>
      <TaskManagement />
    </div>
  );
}

export default TaskPage;
