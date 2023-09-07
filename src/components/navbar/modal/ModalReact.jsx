import React from "react";
import Modal from "react-modal";
import { SlClose } from "react-icons/sl";
import styled from "styled-components";

const ButtonModal = styled.button`
  font-weight: bold;
  background-color: #ffffff;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 2rem;

  &:hover {
    background-color: #dddddd;
  }
`;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "1px solid",
    background: "rgb(207 169 169)",
  },
};

export const EjemploModalReact = ({ modalIsOpen, closeModal, mensaje, aceptarClick }) => {

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <SlClose onClick={closeModal} size={28} style={{ cursor: "pointer" }} />
      <h2>{mensaje}</h2>
      <div style={{ display: "flex", gap: "2rem" }}>
        <ButtonModal onClick={() => { aceptarClick(); closeModal(); }}>Aceptar</ButtonModal>
        <ButtonModal onClick={closeModal}>Cancelar</ButtonModal>
      </div>
    </Modal>
  );
};

export default EjemploModalReact;
