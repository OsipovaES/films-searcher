import styles from "./film.module.css";

export const Film = ({ film }) => {
  return (
    <div className={styles.card}>
      <div className={styles.data}>
        <img className={styles.img} src={film.img} />
        <div>
          <h2 className={styles.title}>{film.title}</h2>
          <ul className={styles.ul}>
            <li>Жанр: {film.genre}</li>
            <li>Год выпуска: {film.year}</li>
            <li>Описание: {film.description}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
