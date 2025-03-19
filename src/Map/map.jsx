import React, { useState } from "react";
import UkraineSVG from "../assets/Kharkiv_Oblast_UPA.svg?raw";
import style from "./map.module.css";
import handleRegionClick from "../utils/regionClick";
import RegionModal from "../Modal/RegionModal";

const UkraineMap = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const onRegionClick = (event) => {
    handleRegionClick(event, setSelectedRegion);
  };

  return (
    <div>
      <div
        className={style.mapContainer}
        dangerouslySetInnerHTML={{ __html: UkraineSVG }}
        onClick={onRegionClick}
      />
      <RegionModal
        region={selectedRegion}
        onClose={() => setSelectedRegion(null)}
      />
    </div>
  );
};

export default UkraineMap;
