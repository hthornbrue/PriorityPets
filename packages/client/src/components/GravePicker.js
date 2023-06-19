import React from "react";
import "./GravePicker.css";

function GravePicker() {
  return (
    <div style={{ backgroundColor: "green" }}>
      <h1 style={{ backgroundColor: "green", color: "white" }}>
        Revive Your Pet
      </h1>
      <div
        className="grave-modal-container"
        style={{ backgroundColor: "green" }}
      >
        <img className="modal-grave" src="/accessories/gravemarker.png" />
        <img className="modal-grave" src="/accessories/gravemarker.png" />
      </div>
    </div>
  );
}

export default GravePicker;
