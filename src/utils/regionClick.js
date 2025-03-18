const regionNames = {
  path6026: "Київська",
  path5946: "Сумська",
  path5958: "Харківська",
  path6028: "Чернігівська",
  path6034: "Луганська",
  path5966: "Донецька",
  path7: "Кримська",
  path5994: "Одеська",
  path5924: "Закарпатська",
  path3616: "Полтавська",
  path5970: "Дніпропетровська",
  path5876: "Запорізька",
  path3316: "Херсонська",
  path6016: "Миколаївська",
  path3404: "Кіровоградська",
  path6020: "Луцька"
  // add
};

const handleRegionClick = (event) => {
  const region = event.target.id;
  if (regionNames[region]) {
    console.log(`Натиснута область: ${regionNames[region]}`);
  }
};

export default handleRegionClick;
