import React from 'react';
import ReactModal from 'react-modal';
import { FaHeart } from 'react-icons/fa';

import './styles.css'

ReactModal.setAppElement("#root");

const Modal = (prop) => {
  return (
    <ReactModal
      isOpen={prop.modalIsOpen}
      onRequestClose={prop.closeModal}
      className="modal"
    >
      <button onClick={prop.closeModal}>x</button>
      <h2>Thank you!</h2>
      <p>Your purchase has been completed <span>< FaHeart /></span></p>
    </ReactModal >
  );
};

export default Modal;