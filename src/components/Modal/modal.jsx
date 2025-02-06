import React, { useState, useEffect } from "react";
import './App.css'

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    console.log("Modal state changed:", showModal);
  }, [showModal]);

  return (
    <div className="App">
      <button className="donate-button" onClick={toggleModal}>
        Donate Now
      </button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={toggleModal}>
              &times;
            </span>
            <img src="assets/ribbon.png" alt="img"/>
            <h2>Donate Now</h2>
            <p>Thank you for considering a donation!</p>
            <button className="donate-button" onClick={toggleModal}>
              Confirm Donation
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
