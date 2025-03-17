import React from "react";
import UkraineSVG from "../assets/Kharkiv_Oblast_UPA.svg?raw";
import style from "./map.module.css";

const UkraineMap = () => {
  const handleRegionClick = (event) => {
    const region = event.target.id;
    if (region === "path6026") {
      console.log("Натиснута область: Київська");
    }
    if (region === "path5946") {
      console.log("Натиснута область: Сумська");
    }
    if (region === "path5958") {
      console.log("Натиснута область: Харківська");
    }
    if (region === "path6028") {
      console.log("Натиснута область: Чернігівська");
    }
    if (region === "path6034") {
      console.log("Натиснута область: Луганська");
    }
    if (region === "path5966") {
      console.log("Натиснута область: Донецька");
    }
    if (region === "path7") {
      console.log("Натиснута область: Кримська");
    }
    if (region === "path5994") {
      console.log("Натиснута область: Одеська");
    }
    if (region === "path5924") {
      console.log("Натиснута область: Закарпатська");
    }
    if (region === "path3616") {
      console.log("Натиснута область: Полтавська");
    }
    if (region === "path5970") {
      console.log("Натиснута область: Дніпропетровська");
    }
    if (region === "path5876") {
      console.log("Натиснута область: Запорізька");
    }
    if (region === "path3316") {
      console.log("Натиснута область: Херсонська");
    }
    if (region === "path6016") {
      console.log("Натиснута область: Миколаївська");
    }
    if (region === "path3404") {
      console.log("Натиснута область: Кіровоградська");
    }
  };

  return (
    <div
      className={style.mapContainer}
      dangerouslySetInnerHTML={{ __html: UkraineSVG }}
      onClick={handleRegionClick}
    />
  );
};

export default UkraineMap;
