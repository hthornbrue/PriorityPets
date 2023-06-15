import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const Signup = ({ showModal, handleCloseModal }) => {
  const [data, setData] = useState({ username: "", password: "", email: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Perform signup logic using data.username, data.email, and data.password.
    // ...
    console.log("Signup clicked!");
    console.log("Username:", data.username);
    console.log("Password:", data.password);
    console.log("Email:", data.email);
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Signup</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Add your signup form or any other content here */}
        {/* Example signup form */}
        <form onSubmit={handleSignup}>
          <input type="email" name="email" placeholder="Email" value={data.email} onChange={handleInputChange} />
          <input type="username" name="username" placeholder="Username" value={data.username} onChange={handleInputChange} />
          <input type="password" name="password" placeholder="Password" value={data.password} onChange={handleInputChange} />
          <Button type="submit">Signup</Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default Signup;
