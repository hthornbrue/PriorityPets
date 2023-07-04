import React, { useContext } from "react";
import TaskManagement from "../components/TaskManagement";
import NavBar from "../components/Navbar.js";
import './TaskPage.css'
import { authContext } from "../contexts/authContext";

function TaskPage() {
  const { auth, setAuth } = useContext(authContext);
console.log(auth.user.tasks)
  return (
    <div className="mainTaskDiv" >
      <NavBar />
      <h1 style={{ color: "white", fontWeight: "bold", fontSize: "60px" }}>{`${auth.user.username}'s Priorities`}</h1>
      <TaskManagement />
    </div>
  );
}

export default TaskPage;
