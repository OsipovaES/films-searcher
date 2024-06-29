import styles from "./filter.module.css";

export const Filter = () => {
  return (
    <form action="" className={styles.form}>
      <h3>Фильтр</h3>
      <label>Жанр</label>
      <select className={styles.select}>
        <option value="" disabled selected hidden>
          Выберите жанр
        </option>
        <option value="">Все жанры</option>
        <option value="action">Экшен</option>
        <option value="comedy">Комедия</option>
        <option value="drama">Драма</option>
      </select>

      <label>Год выпуска</label>
      <select className={styles.select}>
        <option value="" disabled selected hidden>
          Выберите год
        </option>
        <option value="">Все года</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
      </select>
    </form>
  );
};
