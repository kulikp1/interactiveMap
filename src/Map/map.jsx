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
