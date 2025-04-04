import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import style from "./RegionWeather.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import cityMapping from "../../utils/cityMapping";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const RegionWeather = ({ region, onClose }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!region) return;

    const fetchWeather = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${
            cityMapping[region] || region
          },UA&appid=${API_KEY}&units=metric&lang=uk`
        );
        if (!response.ok) throw new Error();
        setWeather(await response.json());
      } catch {
        setWeather(null);
      }
      setLoading(false);
    };

    fetchWeather();
  }, [region]);

  return (
    <Modal
      isOpen={!!region}
      onRequestClose={onClose}
      className={style.modal}
      overlayClassName={style.overlay}
    >
      <h2 className={style.title}>Погода в {cityMapping[region] || region}</h2>

      {loading ? (
        <p>Завантаження...</p>
      ) : weather ? (
        <div className={style.descr}>
          <img
            className={style.img}
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
            alt="Погода"
          />
          <p>
            {" "}
            <strong>Температура:</strong> {weather.main.temp}°C
          </p>
          <p>
            <strong>Відчувається як:</strong> {weather.main.feels_like}°C
          </p>
          <p>
            <strong>Погода:</strong> {weather.weather[0].description}
          </p>
          <p>
            <strong>Вологість:</strong> {weather.main.humidity}%
          </p>
          <p>
            <strong>Вітер:</strong> {weather.wind.speed} м/с
          </p>
        </div>
      ) : (
        <p>Не вдалося отримати дані</p>
      )}

      <button onClick={onClose} className={style.closeButton}>
        <AiOutlineCloseCircle />
      </button>
    </Modal>
  );
};

export default RegionWeather;
