import css from "./statistic.module.css";

const Statistic = () => {
  return (
    <div className={css.mainContainer}>
      <h1 className={css.title}>Статистика Києва для туристів</h1>

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
          <h2>💰 Готелі (середня ціна)</h2>
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
  );
};

export default Statistic;
