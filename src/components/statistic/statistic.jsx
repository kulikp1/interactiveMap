import css from "./statistic.module.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Населення", value: 2.9 },
  { name: "Туристи", value: 2 },
  { name: "Станції метро", value: 52 },
  { name: "Зелена зона (%)", value: 46 },
];

const Statistic = () => {
  return (
    <div className={css.mainContainer}>
      <h1 className={css.title}>Статистика Києва для туристів</h1>

      <div className={css.contentContainer}>
        {/* Ліва частина - Статистика */}
        <div className={css.leftContainer}>
          <div className={css.gridContainer}>
            <div className={css.statItem}>
              <h2>👥 Населення</h2>
              <p>
                ~ <strong>2.9 млн</strong>
              </p>
            </div>

            <div className={css.statItem}>
              <h2>🏛 Пам'яток архітектури</h2>
              <p>
                <strong>2000+</strong>
              </p>
            </div>

            <div className={css.statItem}>
              <h2>🌍 Туристів щороку</h2>
              <p>
                <strong>~2 млн</strong>
              </p>
            </div>

            <div className={css.statItem}>
              <h2>💰 Готелі </h2>
              <p>
                <strong>$40-100</strong> за добу
              </p>
            </div>

            <div className={css.statItem}>
              <h2>🚇 Станцій метро</h2>
              <p>
                <strong>52</strong>
              </p>
            </div>

            <div className={css.statItem}>
              <h2>🌳 Зелена зона</h2>
              <p>
                <strong>46%</strong> міста
              </p>
            </div>
          </div>
        </div>

        {/* Права частина - Графік */}
        <div className={css.rightContainer}>
          <h2 className={css.visualTitle}>Візуалізація статистики</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#4CAF50" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
