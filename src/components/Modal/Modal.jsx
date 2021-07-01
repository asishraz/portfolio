import "./Modal.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";

const Modal = ({ closeModal }) => {
  return ReactDOM.createPortal(
    <div onClick={closeModal} className="modal-overlay">
      <div onClick={(e) => e.stopPropagation()} className="modal-container">
        <div className="upper-section">
          <h1>Looking for a Front-end Developer?</h1>
          <p onClick={closeModal} className="close">
            &times;
          </p>
        </div>
        <div className="middle-section">
          <h3>Then, you might came in the right place. </h3>
          <p>I am a mid-level front end engineer</p>
          <p>
            If you want to have a one-to-one with me, please send me an email
          </p>
        </div>

        <div className="lower-section">
          <a onClick={closeModal} href="" className="modal-btn btn-red">
            Close
          </a>
          <a
            href="mailto:iamasish3001@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="modal-btn btn-green"
          >
            Send Me An Email
          </a>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
