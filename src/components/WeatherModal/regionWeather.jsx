import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import style from "./RegionWeather.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

const API_KEY = "d11483c5e5053b6f9eaeed1eb6bf3e23";

const RegionWeather = ({ region, onClose }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!region) return;

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

    const cityName = cityMapping[region] || region;

    const fetchWeather = async () => {
      try {
        console.log(`Запит до API для міста: ${cityName}`);

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName},UA&appid=${API_KEY}&units=metric&lang=uk`
        );

        console.log("Статус відповіді:", response.status);

        if (!response.ok) {
          const errorText = await response.text();
          console.error("Помилка відповіді:", errorText);
          throw new Error("Помилка отримання погоди");
        }

        const data = await response.json();
        console.log("Отримані дані:", data);

        setWeather(data);
      } catch (err) {
        console.error("Помилка запиту:", err.message);
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
