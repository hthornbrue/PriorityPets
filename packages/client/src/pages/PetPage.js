import React, { useState } from "react";
import PetPicker from "../components/PetPicker";
import "./PetPage.css";
import { Modal, Button } from "react-bootstrap";
import GravePicker from "../components/GravePicker";

function PetPage() {
  const [show, setShow] = useState(false);
 const [open, setOpen] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  const openGraveModal = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const closeGraveModal = () => {
    setOpen(false);
  };

  return (
    <>
   <h1 className="pet-title">Welcome To Your Pet's Page</h1>
        <Button  className="button-card" onClick={openModal}>Choose Your Pet</Button>
    
      <Modal show={show} className="pet-modal">
        <PetPicker 
        // selected={pet}
        // imgs={imgs}
        // data={data}
        // setData={setData}
        // file={file}
        />

        <Button className="modal-cancel-button" onClick={closeModal}>Cancel</Button>
      </Modal>

      {/* <div className="graveyard-card"> */}
      {/* <img className="cemetery" src="/accessories/AdobeStock_543771416.png" /> */}
      <Button className="graveyard-button" onClick={openGraveModal}>Visit A Pet's Grave</Button>
      <Modal show={open} className="grave-modal">
        <GravePicker />
        <Button className="close-grave-modal" onClick={closeGraveModal} >Close</Button>
      </Modal>
      <div className="pet-dec-card">
        
          <img
            className="foodBowl"
            alt="food bowl"
            src="/accessories/foodbowl.png"
          />

          <img
            className="waterBowl" alt="water bowl"
            src="/accessories/waterbowl.png"
          />
          <img className="petty" alt="pet" src="/x2/Cat_Left@2x.png" />
          <img
            className="petHouse"
            alt="pet house"
            src="/accessories/pethouse.png"
          />
        
        </div>
        <div className="graveyard-holder">
      <img className="petTree" alt="tree" src="/accessories/tree.png" />
      <img className="grave" alt="grave" src="/accessories/gravemarker.png" />
      <img className="grave" alt="grave" src="/accessories/gravemarker.png" />
      </div>
      
    </>
  );
}

export default PetPage;
