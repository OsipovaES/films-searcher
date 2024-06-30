import { useParams } from "react-router-dom";
import styles from "./filmPage.module.css";
import { Star } from "../../components/star/component";
import { EmptyStar } from "../../components/star/component";
import { useGetMovieDetailsQuery } from "../../redux/api/movieDetails";

export const FilmPage = () => {
  const { filmId } = useParams();
  const { data: film, isLoading, error } = useGetMovieDetailsQuery(filmId);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка!: {error.message}</div>;
  }

  if (!film) {
    return <div>Фильм не найден</div>;
  }

  return (
    <div className={styles.card}>
      <div className={styles.data}>
        <img className={styles.img} src={film.poster} />
        <div>
          <div className={styles.head}>
            <h2 className={styles.title}>{film.title}</h2>
            <p className={styles.mark}>
              <Star />
              <Star />
              <Star />
              <Star />
              <EmptyStar />
            </p>
          </div>
          <ul className={styles.ul}>
            <li>
              <span className={styles.list}>Жанр:</span> {film.genre}
            </li>
            <li>
              <span className={styles.list}>Год выпуска:</span>{" "}
              {film.release_year}
            </li>
            <li>
              <span className={styles.list}>Рейтинг:</span> {film.rating}
            </li>
            <li>
              <span className={styles.list}>Описание:</span> <br />
              {film.description}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
