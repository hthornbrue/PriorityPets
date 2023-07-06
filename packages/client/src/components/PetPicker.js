import "dotenv/config";
import React, { useState, useContext } from "react";
import "./PetPicker.css";

const imgs = [
  "x2/Cat_Down@2x.png",
  "x2/Chick_Down@2x.png",
  "x2/Fox_Down@2x.png",
  "x2/Mouse_Down@2x.png",
  "x2/Pig_Down@2x.png",
  "x2/Rabbit_Down@2x.png",
];


const PetPicker = ({ formData, setFormData, selected, setSelected }) => {
  
  
  
  const handlePetSelection = async (pet) => {
    setSelected(pet);
    setFormData({ ...formData, appearance: pet });
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
