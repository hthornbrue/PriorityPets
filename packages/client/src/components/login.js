import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";

const Login = ({ showModal, handleCloseModal }) => {
  const [data, setData] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("http://localhost:3000/auth/signin", data);
      const token = response.headers.authorization;

      localStorage.setItem("token", token);
      
      console.log("Login successful!");
      console.log("User:", response.data);
      
      handleCloseModal();
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleLogin}>
          <input type="email" name="email" placeholder="Email" value={data.email} onChange={handleInputChange} />
          <input type="password" name="password" placeholder="Password" value={data.password} onChange={handleInputChange} />
          <Button type="submit">Login</Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default Login;
