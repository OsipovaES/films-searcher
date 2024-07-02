import { useState, useEffect } from "react";
import { useSearchMoviesQuery } from "../../redux/api/movieList";
import { FilmCard } from "../filmCard/component";
import styles from "./filmList.module.css";
import { useSelector } from "react-redux";
import right from "../../img/arrow-right.svg";
import left from "../../img/arrow-left.svg";

export const FilmList = () => {
  const [page, setPage] = useState(1);
  const searchTerm = useSelector((state) => state.search);

  const { data, isLoading, error, refetch } = useSearchMoviesQuery({
    page,
    ...(searchTerm && { title: searchTerm }),
  });

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= (data?.total || 0)) {
      setPage(newPage);
      refetch();
    }
  };

  useEffect(() => {
    setPage(1);
    refetch();
  }, [searchTerm]);

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
          className={`${styles.btnArrow} ${
            isLoading || page === 1 ? styles.disabled : ""
          }`}
          disabled={isLoading || page === 1}
          onClick={() => handlePageChange(page - 1)}
        >
          <img src={left} />
        </button>
        <button
          className={`${styles.btnArrow} ${
            isLoading || page >= (data?.total || 0) ? styles.disabled : ""
          }`}
          disabled={isLoading || page >= (data?.total || 0)}
          onClick={() => handlePageChange(page + 1)}
        >
          <img src={right} />
        </button>
      </div>
    </div>
  );
};
