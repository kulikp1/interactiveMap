import React from "react";
import UkraineSVG from "../assets/Kharkiv_Oblast_UPA.svg?raw";
import style from "./map.module.css";
import handleRegionClick from "../utils/regionClick";

const UkraineMap = () => {
  return (
    <div
      className={style.mapContainer}
      dangerouslySetInnerHTML={{ __html: UkraineSVG }}
      onClick={handleRegionClick}
    />
  );
};

export default UkraineMap;
