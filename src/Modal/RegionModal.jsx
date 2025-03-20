import React from "react";
import Modal from "react-modal";
import style from "./RegionModal.module.css";
import regionsData from "../utils/regionsData.json"; // Імпортуємо JSON

const RegionModal = ({ region, onClose }) => {
  const regionInfo = region ? regionsData[region] : null;

  return (
    <Modal
      isOpen={!!region}
      onRequestClose={onClose}
      contentLabel="Область України"
      className={style.modal}
      overlayClassName={style.overlay}
    >
      <h2 className={style.region}>{region ? `Область: ${region}` : ""}</h2>
      {regionInfo && (
        <p className={style.population}>
          Населення: {regionInfo.population.toLocaleString()} осіб
        </p>
      )}
      <button onClick={onClose} className={style.closeButton}>
        Закрити
      </button>
    </Modal>
  );
};

export default RegionModal;
