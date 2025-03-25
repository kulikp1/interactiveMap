import React, { useState, useEffect } from "react";
import UkraineSVG from "../assets/Kharkiv_Oblast_UPA.svg?raw";
import style from "./map.module.css";
import handleRegionClick from "../../utils/regionClick";
import RegionModal from "../Modal/RegionModal";

const UkraineMap = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedRegionId, setSelectedRegionId] = useState(null);

  useEffect(() => {
    // Видаляємо попереднє виділення при зміні вибраної області
    document.querySelectorAll(`.${style.selected}`).forEach((el) => {
      el.classList.remove(style.selected);
    });

    if (selectedRegionId) {
      const regionElement = document.getElementById(selectedRegionId);
      if (regionElement) {
        regionElement.classList.add(style.selected);
      }
    }
  }, [selectedRegionId]);

  const onRegionClick = (event) => {
    handleRegionClick(event, setSelectedRegion);
    setSelectedRegionId(event.target.id); // Збереження ID натиснутої області
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
        onClose={() => {
          setSelectedRegion(null);
          setSelectedRegionId(null);
        }}
      />
    </div>
  );
};

export default UkraineMap;
