import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import style from "./RegionWeather.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

const API_KEY = "5f01f17d8186a02f8a47f0c329ac5c39";

const cityMapping = {
  Київська: "Kyiv",
  Сумська: "Sumy",
  Харківська: "Kharkiv",
  Чернігівська: "Chernihiv",
  Луганська: "Luhansk",
  Донецька: "Donetsk",
  Кримська: "Simferopol",
  Одеська: "Odesa",
  Ужгородська: "Uzhhorod",
  Полтавська: "Poltava",
  Дніпропетровська: "Dnipro",
  Запорізька: "Zaporizhzhia",
  Херсонська: "Kherson",
  Миколаївська: "Mykolaiv",
  Кіровоградська: "Kropyvnytskyi",
  Луцька: "Lutsk",
  Львівська: "Lviv",
  "Івано-Франківська": "Ivano-Frankivsk",
  Чернівецька: "Chernivtsi",
  Тернопільська: "Ternopil",
  Рівненська: "Rivne",
  Хмельницька: "Khmelnytskyi",
  Житомирська: "Zhytomyr",
  Черкасська: "Cherkasy",
  Вінницька: "Vinnytsia",
  "М.Київ": "Kyiv",
};

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
      <h2 className={style.title}>Погода в {cityMapping[region]}</h2>

      {loading ? (
        <p>Завантаження...</p>
      ) : weather ? (
        <div>
          <p>Температура: {weather.main.temp}°C</p>
          <p>Відчувається як: {weather.main.feels_like}°C</p>
          <p>Погода: {weather.weather[0].description}</p>
          <p>Вологість: {weather.main.humidity}%</p>
          <p>Вітер: {weather.wind.speed} м/с</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
            alt="Погода"
          />
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
