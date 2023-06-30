import React from "react";
import { Routes, Route } from "react-router-dom";
import TaskPage from "./pages/TaskPage";
import HomePage from "./pages/HomePage";
import PetPage from "./pages/PetPage";
import PetGame from "./pages/PetGame";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/PetPage" element={<PetPage />} />
        <Route path="/TaskPage" element={<TaskPage />} />
        <Route path="/PetGame" element={<PetGame />} />
      </Routes>
    </>
  );
}
export default App;


