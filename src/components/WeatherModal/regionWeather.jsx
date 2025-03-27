import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import style from "./RegionWeather.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY"; // Замініть на свій ключ

const RegionWeather = ({ region, onClose }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!region) return;

    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${region},UA&appid=${API_KEY}&units=metric&lang=uk`
        );
        if (!response.ok) throw new Error("Помилка отримання погоди");
        const data = await response.json();
        setWeather(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [region]);

  return (
    <Modal
      isOpen={!!region}
      onRequestClose={onClose}
      contentLabel="Погода в області"
      className={style.modal}
      overlayClassName={style.overlay}
    >
      <h2 className={style.title}>Погода в {region}</h2>

      {loading && <p className={style.loading}>Завантаження...</p>}
      {error && <p className={style.error}>{error}</p>}

      {weather && (
        <div className={style.weatherContainer}>
          <p>
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
            <strong>Швидкість вітру:</strong> {weather.wind.speed} м/с
          </p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
            alt="Іконка погоди"
          />
        </div>
      )}

      <button onClick={onClose} className={style.closeButton}>
        <AiOutlineCloseCircle />
      </button>
    </Modal>
  );
};

export default RegionWeather;
