import React from "react";
import { Routes, Route } from "react-router-dom";
import TaskPage from "./pages/TaskPage";
import HomePage from "./pages/HomePage";
import PetPage from "./pages/PetPage";
import { RequireAuth } from "react-auth-kit";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/TaskPage" element={<RequireAuth loginPath="/" component={TaskPage} />} />
      <Route path="/PetPage" element={<RequireAuth loginPath="/" component={PetPage} />} />
    </Routes>
  );
}

export default App;
