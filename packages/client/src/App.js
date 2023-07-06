import React, { useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import TaskPage from "./pages/TaskPage";
import HomePage from "./pages/HomePage";
import PetPage from "./pages/PetPage";
import PetGame from "./components/PetGame";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import ProtectedRoute from "./components/ProtectedRoute";
import { authContext } from "./contexts/authContext";

function App() {
  const { auth, setAuth } = useContext(authContext);
  console.log("App: " + auth);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handleLogin = (email) => {
    setUserEmail(email);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUserEmail('');
    setIsLoggedIn(false);
  };

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage handleLogin={handleLogin} handleLogout={handleLogout} />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/PetPage" element={<PetPage />} />
          <Route path="/TaskPage" element={<TaskPage isLoggedIn={isLoggedIn} userEmail={userEmail} />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
