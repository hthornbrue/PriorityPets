import React, { useState } from "react";
import "./PetPicker.css";
import axios from "axios";
import { Container, Form } from "react-bootstrap";

const imgs = [
  "/x2/Cat_Down@2x.png",
  "/x2/Chick_Down@2x.png",
  "/x2/Fox_Down@2x.png",
  "/x2/Mouse_Down@2x.png",
  "/x2/Pig_Down@2x.png",
  "/x2/Rabbit_Down@2x.png",
];

const initialData = {
  name: "",
  URL: "",
  healthLevel: 100,
  hungerLevel: 100,
};

const PetPicker = ({ user, selected, setSelected }) => {
  const [images, setImages] = useState([
    "/x2/Cat_Down@2x.png",
    "/x2/Chick_Down@2x.png",
    "/x2/Fox_Down@2x.png",
    "/x2/Mouse_Down@2x.png",
    "/x2/Pig_Down@2x.png",
    "/x2/Rabbit_Down@2x.png",
  ]);

  const [data, setData] = useState([initialData]);
  const [file, setFile] = useState();
  /**
   * @param {*} e
   */

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  /**
   * @param {*} e
   */

  const handleUpload = (e) => {
    e.preventDefault();
  };

  const formData = new FormData();

  formData.append("pet", file);

  try {
    const response = axios
      .post(`/pets`)
      .then((response) => console.log(response));
    setData({ ...data, url: response.data.path });
  } catch (error) {
    console.log("You have an error");
  }
  return (
    <div >
      <Container className="pet-container">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label className="pet-picker-header">
              Choose Your Pet
            </Form.Label>
            <div className="pet-card">
              {imgs.map((pet) => (
                <img
                  id="image"
                  className={pet === selected ? "selected" : "" }
                  key={pet}
                  src={pet}
                  alt={"pet"}
                  onClick={() => setSelected(pet)}
                />
              ))}
              
            </div>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
};

export default PetPicker;
