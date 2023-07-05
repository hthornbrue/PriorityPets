import React, { useState, useContext } from "react";
import "./PetPicker.css";
import axios from "../util/axiosConfig";
import { petContext } from "../contexts/petContext";

const imgs = [
  "/x2/Cat_Down@2x.png",
  "/x2/Chick_Down@2x.png",
  "/x2/Fox_Down@2x.png",
  "/x2/Mouse_Down@2x.png",
  "/x2/Pig_Down@2x.png",
  "/x2/Rabbit_Down@2x.png",
];

const PetPicker = ({ selected, setSelected }) => {
  const { setPet } = useContext(petContext);
  const [formData, setFormData] = useState({
    name: "",
    appearance: "",
    healthLevel: 100,
  });

  const handlePetSelection = async (pet) => {
    setSelected(pet);
    setFormData({ ...formData, appearance: pet });

    try {
      const response = await axios.post(`/pets/${pet}`, formData);
      console.log("Updated pet:", response.data);
      setPet(response.data); 
    } catch (error) {
      console.log("Error occurred while updating the pet:", error);
    }
  };

  return (
    <div>
      <div className="pet-card">
        {imgs.map((pet) => (
          <img
            id="image"
            className={pet === selected ? "selected" : ""}
            key={pet}
            src={pet}
            alt="pet"
            onClick={() => handlePetSelection(pet)}
          />
        ))}
      </div>
    </div>
  );
};

export default PetPicker;
