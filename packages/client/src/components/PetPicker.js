import React, { useState } from "react";
import './PetPicker.css'


const imgs = [
    "/x2/Cat_Down@2x.png",
    "/x2/Chick_Down@2x.png",
    "/x2/Fox_Down@2x.png",
    "/x2/Mouse_Down@2x.png",
    "/x2/Pig_Down@2x.png",
    "/x2/Rabbit_Down@2x.png",
];

const initialData = {
    URL: "",
};

const PetPicker = () => {
    const [images, setImages] = useState(imgs)


  return (
    <div style={{backgroundColor: "red"}}>
        <div className="pet-card" >
            {imgs.map((pet) =>(
                <img
                id="image"
                key={pet}
                src={pet}
                alt={"pet"}
                 />

            ))}
        </div>
    </div>
  )
}

export default PetPicker