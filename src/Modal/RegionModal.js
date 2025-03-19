import React from "react";
import Modal from "react-modal";
import style from "./modal.module.css";

Modal.setAppElement("#root");

const RegionModal = ({ region, onClose }) => {
  return (
    <Modal
      isOpen={!!region}
      onRequestClose={onClose}
      contentLabel="Область України"
      className={style.modal}
      overlayClassName={style.overlay}
    >
      <h2>{region ? `Область: ${region}` : ""}</h2>
      <button onClick={onClose} className={style.closeButton}>
        Закрити
      </button>
    </Modal>
  );
};

export default RegionModal;
