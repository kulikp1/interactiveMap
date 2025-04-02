import { useLocation } from "react-router-dom";
import css from "./statistic.module.css";
import tourismData from "../../utils/tourismData";
import statisticsData from "../../utils/statisticsData";
import cityMapping from "../../utils/cityMapping";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statistic = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const regionUA = params.get("region") || "Київ"; // За замовчуванням Київ
  const region = cityMapping[regionUA] || "Kyiv";

  console.log("Отриманий регіон:", regionUA);
  console.log("Відповідний ключ у tourismData:", region);
  console.log("Доступні дані:", tourismData);

  const data = tourismData[region] || [];
  const cityStats = statisticsData[region] || [];

  console.log("Дані для регіону:", data);
  console.log("Статистика для міста:", cityStats);

  return (
    <div className={css.mainContainer}>
      <h1 className={css.title}>{regionUA} – статистика для туристів</h1>

      <div className={css.contentContainer}>
        {/* Ліва частина - Загальна статистика */}
        <div className={css.leftContainer}>
          <div className={css.gridContainer}>
            {cityStats.length > 0 ? (
              cityStats.map((item) => (
                <div key={item.id} className={css.statItem}>
                  <h2>{item.title}</h2>
                  <p>
                    <strong>{item.value}</strong>
                  </p>
                </div>
              ))
            ) : (
              <p>Немає статистичних даних для цього міста</p>
            )}
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
