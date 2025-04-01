import { useLocation } from "react-router-dom";
import css from "./statistic.module.css";
import tourismData from "../../utils/tourismData";
import statisticsData from "../../utils/statisticsData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Мапінг українських назв на англійські ключі у tourismData
const regionMap = {
  Київська: "Kyiv",
  Львівська: "Lviv",
  Одеська: "Odesa",
  Харківська: "Kharkiv",
  Дніпропетровська: "Dnipro",
};

const Statistic = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const regionUA = params.get("region") || "Київська"; // За замовчуванням Київська область

  // Перетворюємо українську назву на ключ у tourismData
  const region = regionMap[regionUA] || "Kyiv";

  console.log("Отриманий регіон:", regionUA);
  console.log("Відповідний ключ у tourismData:", region);
  console.log("Доступні дані:", tourismData);

  const data = tourismData[region] || [];

  console.log("Дані для регіону:", data);

  return (
    <div className={css.mainContainer}>
      <h1 className={css.title}>
        {regionUA} область – статистика для туристів
      </h1>

      <div className={css.contentContainer}>
        {/* Ліва частина - Загальна статистика */}
        <div className={css.leftContainer}>
          <div className={css.gridContainer}>
            {statisticsData.map((item) => (
              <div key={item.id} className={css.statItem}>
                <h2>{item.title}</h2>
                <p>
                  <strong>{item.value}</strong>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Права частина - Графік */}
        <div className={css.rightContainer}>
          <h2 className={css.visualTitle}>
            Відвідуваність міста (млн. люд.) 2018-2023
          </h2>
          {data.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="visitors" fill="#4CAF50" />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <p>Немає даних для цього міста</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Statistic;
