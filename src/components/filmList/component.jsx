import { useState } from "react";
import { useSearchMoviesQuery } from "../../redux/api/movieList";
import { FilmCard } from "../filmCard/component";
import styles from "./filmList.module.css";
import { useSelector } from "react-redux";

export const FilmList = () => {
  const [page, setPage] = useState(1);

  const search = useSelector((state) => state.search);

  const { data, isLoading, error } = useSearchMoviesQuery({
    page,
    ...(search && { title: search }),
  });

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка при получении списка фильмов...</div>;
  }

  return (
    <div>
      {data?.movies.map((movie) => {
        return <FilmCard filmId={movie.id} key={movie.id} />;
      })}
      <div className={styles.buttons}>
        <button
          disabled={isLoading || page === 1}
          onClick={() => {
            if (!isLoading) {
              setPage((prev) => prev + 1);
            }
          }}
        >
          Назад
        </button>
        <button
          disabled={isLoading || page >= (data?.total || 0) - 1}
          onClick={() => {
            if (!isLoading) {
              setPage((prev) => prev - 1);
            }
          }}
        >
          Вперед
        </button>
      </div>
    </div>
  );
};
