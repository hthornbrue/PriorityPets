import React from "react";
import { Routes, Route } from "react-router-dom";
import TaskPage from "./pages/TaskPage";
import HomePage from "./pages/HomePage";
import PetPage from "./pages/PetPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/PetPage" element={<PetPage />} />
      <Route path="/TaskPage" element={<TaskPage />} />
    </Routes>
  );
}
export default App;
 