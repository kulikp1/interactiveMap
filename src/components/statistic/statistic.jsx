import { useLocation } from "react-router-dom";
import css from "./statistic.module.css";
import data from "../../utils/tourismData";
import statisticsData from "../../utils/statisticsData";
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
  const region = params.get("region") || "Київ"; // За замовчуванням Київ, якщо параметр не передано

  return (
    <div className={css.mainContainer}>
      <h1 className={css.title}>{region} область статистика для туристів</h1>

      <div className={css.contentContainer}>
        {/* Ліва частина - Статистика */}
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
            Відвідуваність міста млн. люд. (2018-2023)
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="visitors" fill="#4CAF50" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
