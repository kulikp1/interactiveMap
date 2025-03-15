import React from "react";
import UkraineSVG from "../assets/Kharkiv_Oblast_UPA.svg?raw";
import style from "./map.module.css";

const UkraineMap = () => {
  const handleRegionClick = (event) => {
    console.log("Натиснута область:", event.target.id);
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
