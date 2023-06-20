import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

import axios from "../util/axiosConfig";

const Login = ({ showModal, handleCloseModal }) => {
  const [data, setData] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();


    //Set up login login compared to auth backend.
    /*axios
      .get("users")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });*/

    // Perform login logic using data.username, data.email, and data.password.
    // ...
    console.log("Login clicked!");
    console.log("Password:", data.password);
    console.log("Email:", data.email);
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Add your login form or any other content here */}
        {/* Example login form */}
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
