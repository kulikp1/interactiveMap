const regionNames = {
  path6026: "Київська",
  path5946: "Сумська",
  path5958: "Харківська",
  path6028: "Чернігівська",
  path6034: "Луганська",
  path5966: "Донецька",
  path7: "Кримська",
  path5994: "Одеська",
  path5924: "Ужгородська",
  path3616: "Полтавська",
  path5970: "Дніпропетровська",
  path5876: "Запорізька",
  path3316: "Херсонська",
  path6016: "Миколаївська",
  path3404: "Кіровоградська",
  path6020: "Луцька",
  path5914: "Львівська",
  path5986: "Івано-Франківська",
  path5920: "Чернівецька",
  path5716: "Тернопільська",
  path6022: "Рівненська",
  path5798: "Хмельницька",
  path5908: "Житомирська",
  path3354: "Черкасська",
  path5934: "Вінницька",
  path297: "М.Київ"
};

const handleRegionClick = (event, setSelectedRegion) => {
  const region = event.target.id;
  if (regionNames[region]) {
    console.log(`Натиснута область: ${regionNames[region]}`);
    setSelectedRegion(regionNames[region]);
  }
};

export default handleRegionClick;
