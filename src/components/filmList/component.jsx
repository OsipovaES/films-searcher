import { useSearchMoviesQuery } from "../../redux/api/movieList";
import { FilmCard } from "../filmCard/component";

export const FilmList = () => {
  const { data: movies, isLoading, error } = useSearchMoviesQuery();

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка при получении списка фильмов...</div>;
  }

  return (
    <div>
      {movies.map((movie) => {
        return <FilmCard filmId={movie.id} key={movie.id} />;
      })}
    </div>
  );
};
