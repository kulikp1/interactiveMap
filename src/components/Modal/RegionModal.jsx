import React, { useState } from "react";
import Modal from "react-modal";
import style from "./RegionModal.module.css";
import regionsData from "../../utils/regionsData.json";
import { AiOutlineCloseCircle } from "react-icons/ai";

Modal.setAppElement("#root");

const RegionModal = ({ region, onClose }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const regionInfo = region ? regionsData[region] : null;

  const handleImageClick = () => {
    setIsZoomed(false);
  };

  return (
    <Modal
      isOpen={!!region}
      onRequestClose={onClose}
      contentLabel="Область України"
      className={style.modal}
      overlayClassName={style.overlay}
    >
      <h2 className={style.region}>{region ? `${region}` : ""}</h2>
      {regionInfo && (
        <>
          <div>
            <img
              src={regionInfo.img}
              alt={region}
              className={`${style.image} ${isZoomed ? style.zoomed : ""}`}
              onMouseEnter={() => setIsZoomed(true)}
              onClick={handleImageClick}
            />
            <p className={style.population}>
              <strong>Населення:</strong> {regionInfo.population.toString()}{" "}
              осіб
            </p>
            <p className={style.area}>
              <strong>Територія:</strong> {regionInfo.area.toString()} км²
            </p>
            <p className={style.rivers}>
              <strong>Річки:</strong> {regionInfo.rivers.toString()}
            </p>
            <p className={style.founded}>
              <strong>Засновано у</strong> {regionInfo.founded.toString()} році
            </p>
          </div>
        </>
      )}
      <button onClick={onClose}>
        <AiOutlineCloseCircle className={style.closeButton} />
      </button>
    </Modal>
  );
};

export default RegionModal;
