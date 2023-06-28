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
  appearance: "",
  URL: "",
  healthLevel: 100,
  hungerLevel: 100,
};

const PetPicker = ({ selected, setSelected, pet }) => {
  const [data, setData] = useState([initialData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    try {
      const response = await axios.post("/:id", data);
      setData({ ...data, URL: response.imgs.path });
    } catch (error) {
      console.log("Error occurred while submitting the form:", error);
    }
  };

  const handlePetSelection = (pet) => {
    console.log(pet);
    setSelected(pet);
  };

  return (
    <div>
      <Container className="pet-container">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            {/* <Form.Label className="pet-picker-header">
              Choose Your Pet
            </Form.Label> */}
            <div className="pet-card">
              {imgs.map((pet) => (
                <img
                  id="image"
                  className={pet === selected ? "selected" : ""}
                  key={pet}
                  src={pet}
                  alt={"pet"}
                  onClick={() => handlePetSelection(pet)}
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
