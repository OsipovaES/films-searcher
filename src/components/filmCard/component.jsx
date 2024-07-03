import { Link } from "react-router-dom";
import styles from "./film.module.css";

export const FilmCard = ({ film }) => {
  return (
    <Link to={`/film/${film.id}`} className={styles.card}>
      <div className={styles.data}>
        <img className={styles.img} src={film.poster} alt={film.title} />
        <div>
          <h2 className={styles.title}>{film.title}</h2>
          <ul className={styles.ul}>
            <li>
              <span className={styles.list}>Жанр </span> {film.genre}
            </li>
            <li>
              <span className={styles.list}>Год выпуска </span>
              {film.release_year}
            </li>
            <li>
              <span className={styles.list}>Описание </span> {film.description}
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
};
