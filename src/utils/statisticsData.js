const statisticsData = {
  Kyiv: [
    { id: 1, title: "👥 Населення", value: "~ 2.9 млн" },
    { id: 2, title: "🏛 Пам'яток архітектури", value: "2000+" },
    { id: 3, title: "🌍 Туристів щороку", value: "~2 млн" },
    { id: 4, title: "💰 Готелі", value: "$40-100 за добу" },
    { id: 5, title: "🚇 Станцій метро", value: "52" },
    { id: 6, title: "🌳 Зелена зона", value: "46% міста" },
  ],
  Lviv: [
    { id: 1, title: "👥 Населення", value: "~ 720 тис." },
    { id: 2, title: "🏛 Пам'яток архітектури", value: "2500+" },
    { id: 3, title: "🌍 Туристів щороку", value: "~2.5 млн" },
    { id: 4, title: "💰 Готелі", value: "$30-80 за добу" },
    { id: 5, title: "🚋 Трамвайних маршрутів", value: "10" },
    { id: 6, title: "🌳 Зелена зона", value: "33% міста" },
  ],
  Odesa: [
    { id: 1, title: "👥 Населення", value: "~ 1 млн" },
    { id: 2, title: "🏛 Пам'яток архітектури", value: "1000+" },
    { id: 3, title: "🌍 Туристів щороку", value: "~3 млн" },
    { id: 4, title: "💰 Готелі", value: "$35-90 за добу" },
    { id: 5, title: "🚢 Порт", value: "Найбільший в Україні" },
    { id: 6, title: "🌳 Зелена зона", value: "40% міста" },
  ],
  Dnipro: [
    { id: 1, title: "👥 Населення", value: "~ 980 тис." },
    { id: 2, title: "🏛 Пам'яток архітектури", value: "700+" },
    { id: 3, title: "🌍 Туристів щороку", value: "~1 млн" },
    { id: 4, title: "💰 Готелі", value: "$25-70 за добу" },
    { id: 5, title: "🌉 Мостів через Дніпро", value: "9" },
    { id: 6, title: "🌳 Зелена зона", value: "35% міста" },
  ],
  Sumy: [
    { id: 1, title: "👥 Населення", value: "~ 260 тис." },
    { id: 2, title: "🏛 Пам'яток архітектури", value: "300+" },
    { id: 3, title: "🌍 Туристів щороку", value: "~500 тис." },
    { id: 4, title: "💰 Готелі", value: "$20-50 за добу" },
    { id: 5, title: "🏞 Парків", value: "10+" },
    { id: 6, title: "🌳 Зелена зона", value: "38% міста" },
  ],
  Kharkiv: [
    { id: 1, title: "👥 Населення", value: "~ 1.4 млн" },
    { id: 2, title: "🏛 Пам'яток архітектури", value: "850+" },
    { id: 3, title: "🌍 Туристів щороку", value: "~1.5 млн" },
    { id: 4, title: "💰 Готелі", value: "$30-70 за добу" },
    { id: 5, title: "🚇 Станцій метро", value: "30" },
    { id: 6, title: "🌳 Зелена зона", value: "40% міста" },
  ],
  Chernihiv: [
    { id: 1, title: "👥 Населення", value: "~ 280 тис." },
    { id: 2, title: "🏛 Пам'яток архітектури", value: "1200+" },
    { id: 3, title: "🌍 Туристів щороку", value: "~600 тис." },
    { id: 4, title: "💰 Готелі", value: "$25-60 за добу" },
    { id: 5, title: "🏰 Старовинних храмів", value: "15+" },
    { id: 6, title: "🌳 Зелена зона", value: "42% міста" },
  ],
  Luhansk: [
    { id: 1, title: "👥 Населення", value: "~ 400 тис." },
    { id: 2, title: "🏛 Пам'яток архітектури", value: "500+" },
    { id: 3, title: "🌍 Туристів щороку", value: "~300 тис." },
    { id: 4, title: "💰 Готелі", value: "$15-40 за добу" },
    { id: 5, title: "🚆 Залізничні вокзали", value: "2" },
    { id: 6, title: "🌳 Зелена зона", value: "37% міста" },
  ],
  Donetsk: [
    { id: 1, title: "👥 Населення", value: "~ 900 тис." },
    { id: 2, title: "🏛 Пам'яток архітектури", value: "650+" },
    { id: 3, title: "🌍 Туристів щороку", value: "~700 тис." },
    { id: 4, title: "💰 Готелі", value: "$20-60 за добу" },
    { id: 5, title: "⚽️ Стадіон 'Донбас Арена'", value: "Європейський рівень" },
    { id: 6, title: "🌳 Зелена зона", value: "39% міста" },
  ],
  Crimea: [
    { id: 1, title: "👥 Населення", value: "~ 2.4 млн" },
    { id: 2, title: "🏖 Курортних зон", value: "30+" },
    { id: 3, title: "🌍 Туристів щороку", value: "~5 млн" },
    { id: 4, title: "💰 Готелі", value: "$50-150 за добу" },
    { id: 5, title: "⛰ Гірські маршрути", value: "20+" },
    { id: 6, title: "🌳 Природні парки", value: "12" },
  ],
  Uzhhorod: [
    { id: 1, title: "👥 Населення", value: "~ 115 тис." },
    { id: 2, title: "🏛 Пам'яток архітектури", value: "200+" },
    { id: 3, title: "🌍 Туристів щороку", value: "~500 тис." },
    { id: 4, title: "💰 Готелі", value: "$25-60 за добу" },
    { id: 5, title: "🌲 Національних парків", value: "5" },
    { id: 6, title: "🌳 Зелена зона", value: "45% міста" },
  ],
  Poltava: [
    { id: 1, title: "👥 Населення", value: "~ 290 тис." },
    { id: 2, title: "🏛 Пам'яток архітектури", value: "500+" },
    { id: 3, title: "🌍 Туристів щороку", value: "~700 тис." },
    { id: 4, title: "💰 Готелі", value: "$20-50 за добу" },
    { id: 5, title: "🥟 Фестиваль вареників", value: "Щорічний" },
    { id: 6, title: "🌳 Зелена зона", value: "38% міста" },
  ],
  Zaporizhzhia: [
    { id: 1, title: "👥 Населення", value: "~ 710 тис." },
    { id: 2, title: "🏛 Пам'яток архітектури", value: "400+" },
    { id: 3, title: "🌍 Туристів щороку", value: "~1 млн" },
    { id: 4, title: "💰 Готелі", value: "$30-70 за добу" },
    { id: 5, title: "🏝 Острів Хортиця", value: "Національний заповідник" },
    { id: 6, title: "🌳 Зелена зона", value: "36% міста" },
  ],
  Kherson: [
    { id: 1, title: "👥 Населення", value: "~ 290 тис." },
    { id: 2, title: "🏛 Пам'яток архітектури", value: "300+" },
    { id: 3, title: "🌍 Туристів щороку", value: "~600 тис." },
    { id: 4, title: "💰 Готелі", value: "$25-60 за добу" },
    { id: 5, title: "🚢 Порт", value: "Вихід до Чорного моря" },
    { id: 6, title: "🌳 Зелена зона", value: "40% міста" },
  ],
   Mykolaiv: [
    { id: 1, title: "👥 Населення", value: "~ 470 тис." },
    { id: 2, title: "🏛 Пам'яток архітектури", value: "350+" },
    { id: 3, title: "🌍 Туристів щороку", value: "~700 тис." },
    { id: 4, title: "💰 Готелі", value: "$20-50 за добу" },
    { id: 5, title: "🚢 Порт", value: "Один із найбільших в Україні" },
    { id: 6, title: "🌳 Зелена зона", value: "38% міста" },
  ],
  Kirovohrad: [
    { id: 1, title: "👥 Населення", value: "~ 230 тис." },
    { id: 2, title: "🏛 Пам'яток архітектури", value: "200+" },
    { id: 3, title: "🌍 Туристів щороку", value: "~500 тис." },
    { id: 4, title: "💰 Готелі", value: "$15-40 за добу" },
    { id: 5, title: "🎭 Театрів", value: "3" },
    { id: 6, title: "🌳 Зелена зона", value: "40% міста" },
  ],
  Lutsk: [
    { id: 1, title: "👥 Населення", value: "~ 215 тис." },
    { id: 2, title: "🏛 Пам'яток архітектури", value: "250+" },
    { id: 3, title: "🌍 Туристів щороку", value: "~600 тис." },
    { id: 4, title: "💰 Готелі", value: "$20-45 за добу" },
    { id: 5, title: "🏰 Замок Любарта", value: "Головна пам'ятка" },
    { id: 6, title: "🌳 Зелена зона", value: "42% міста" },
  ],
  IvanoFrankivsk: [
    { id: 1, title: "👥 Населення", value: "~ 240 тис." },
    { id: 2, title: "🏛 Пам'яток архітектури", value: "300+" },
    { id: 3, title: "🌍 Туристів щороку", value: "~800 тис." },
    { id: 4, title: "💰 Готелі", value: "$30-70 за добу" },
    { id: 5, title: "🏔 Відстань до Карпат", value: "60 км" },
    { id: 6, title: "🌳 Зелена зона", value: "45% міста" },
  ],
  Chernivtsi: [
    { id: 1, title: "👥 Населення", value: "~ 265 тис." },
    { id: 2, title: "🏛 Пам'яток архітектури", value: "400+" },
    { id: 3, title: "🌍 Туристів щороку", value: "~700 тис." },
    { id: 4, title: "💰 Готелі", value: "$25-55 за добу" },
    { id: 5, title: "🏛 Університет ЮНЕСКО", value: "Чернівецький національний" },
    { id: 6, title: "🌳 Зелена зона", value: "40% міста" },
  ],

   Ternopil: [
    { id: 1, title: "👥 Населення", value: "~ 220 тис." },
    { id: 2, title: "🏛 Пам'яток архітектури", value: "300+" },
    { id: 3, title: "🌍 Туристів щороку", value: "~500 тис." },
    { id: 4, title: "💰 Готелі", value: "$20-50 за добу" },
    { id: 5, title: "🌊 Озеро в центрі міста", value: "Тернопільський став" },
    { id: 6, title: "🌳 Зелена зона", value: "40% міста" },
  ],
  Rivne: [
    { id: 1, title: "👥 Населення", value: "~ 245 тис." },
    { id: 2, title: "🏛 Пам'яток архітектури", value: "250+" },
    { id: 3, title: "🌍 Туристів щороку", value: "~600 тис." },
    { id: 4, title: "💰 Готелі", value: "$20-50 за добу" },
    { id: 5, title: "🌲 Тунель Кохання", value: "Популярна туристична локація" },
    { id: 6, title: "🌳 Зелена зона", value: "38% міста" },
  ],
  Khmelnytskyi: [
    { id: 1, title: "👥 Населення", value: "~ 270 тис." },
    { id: 2, title: "🏛 Пам'яток архітектури", value: "200+" },
    { id: 3, title: "🌍 Туристів щороку", value: "~550 тис." },
    { id: 4, title: "💰 Готелі", value: "$15-45 за добу" },
    { id: 5, title: "🛍 Найбільший ринок України", value: "Хмельницький ринок" },
    { id: 6, title: "🌳 Зелена зона", value: "42% міста" },
  ],
  Zhytomyr: [
    { id: 1, title: "👥 Населення", value: "~ 265 тис." },
    { id: 2, title: "🏛 Пам'яток архітектури", value: "280+" },
    { id: 3, title: "🌍 Туристів щороку", value: "~500 тис." },
    { id: 4, title: "💰 Готелі", value: "$18-50 за добу" },
    { id: 5, title: "🛰 Музей космонавтики", value: "імені С. Корольова" },
    { id: 6, title: "🌳 Зелена зона", value: "41% міста" },
  ],
  Cherkasy: [
    { id: 1, title: "👥 Населення", value: "~ 275 тис." },
    { id: 2, title: "🏛 Пам'яток архітектури", value: "350+" },
    { id: 3, title: "🌍 Туристів щороку", value: "~650 тис." },
    { id: 4, title: "💰 Готелі", value: "$20-55 за добу" },
    { id: 5, title: "🌊 Дніпро", value: "Найширша частина річки" },
    { id: 6, title: "🌳 Зелена зона", value: "43% міста" },
  ],

  Vinnytsia: [
    { id: 1, title: "👥 Населення", value: "~ 370 тис." },
    { id: 2, title: "🏛 Пам'яток архітектури", value: "400+" },
    { id: 3, title: "🌍 Туристів щороку", value: "~800 тис." },
    { id: 4, title: "💰 Готелі", value: "$25-60 за добу" },
    { id: 5, title: "💦 Фонтан Roshen", value: "Один з найбільших у Європі" },
    { id: 6, title: "🌳 Зелена зона", value: "40% міста" },
  ],
};

export default statisticsData;
