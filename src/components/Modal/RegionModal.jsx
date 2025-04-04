import React, { useState } from "react";
import Modal from "react-modal";
import style from "./RegionModal.module.css";
import regionsData from "../../utils/regionsData.json";
import { AiOutlineCloseCircle } from "react-icons/ai";
import RegionWeather from "../WeatherModal/regionWeather";
import { Link } from "react-router-dom";

Modal.setAppElement("#root");

const RegionModal = ({ region, onClose }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [isWeatherModalOpen, setIsWeatherModalOpen] = useState(false);
  const regionInfo = region ? regionsData[region] : null;

  const handleImageClick = () => {
    setIsZoomed(false);
  };

  const openWeatherModal = () => setIsWeatherModalOpen(true);
  const closeWeatherModal = () => setIsWeatherModalOpen(false);

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
          <img
            src={regionInfo.img}
            alt={region}
            className={`${style.image} ${isZoomed ? style.zoomed : ""}`}
            onMouseEnter={() => setIsZoomed(true)}
            onClick={handleImageClick}
          />
          <div className={style.infoContainer}>
            <div>
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
                <strong>Засновано у</strong> {regionInfo.founded.toString()}{" "}
                році
              </p>
            </div>
            <div>
              <p className={style.population}>
                <strong>Щільність населення:</strong>{" "}
                {regionInfo.density.toString()} люд./км²
              </p>
              <p className={style.area}>
                <strong>Телефонний код:</strong>{" "}
                {regionInfo.phone_code.toString()}
              </p>
              <p className={style.rivers}>
                <strong>Поштовий код:</strong>{" "}
                {regionInfo.postal_code.toString()}
              </p>
              <p className={style.founded}>
                <strong>Кількість районів:</strong>{" "}
                {regionInfo.districts.toString()}
              </p>
            </div>
          </div>
          <div className={style.btnContainer}>
            <button className={style.weather} onClick={openWeatherModal}>
              Переглянути погоду
            </button>

            <Link to={`/statistic?region=${region}`}>
              <button className={style.statistic}>Статистика</button>
            </Link>
          </div>
        </>
      )}
      <button onClick={onClose}>
        <AiOutlineCloseCircle className={style.closeButton} />
      </button>

      {isWeatherModalOpen && (
        <RegionWeather region={region} onClose={closeWeatherModal} />
      )}
    </Modal>
  );
};

export default RegionModal;
