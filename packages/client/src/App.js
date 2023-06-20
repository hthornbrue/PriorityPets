import React from "react";
import { Routes, Route } from "react-router-dom";
import TaskPage from "./pages/TaskPage";
import HomePage from "./pages/HomePage";
import PetPage from "./pages/PetPage";

function App() {
  return (
    <Routes>
      <Route path="/pets" element={<PetPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/tasks" element={<TaskPage />} />
    </Routes>
  );
}
export default App;
