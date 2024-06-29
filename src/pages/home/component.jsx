import { FilmList } from "../../components/filmList/component";
import { Filter } from "../../components/filter/component";
import { Search } from "../../components/search/component";
import style from "./home.module.css";

export const Home = () => {
  return (
    <div className={style.home}>
      <Filter />
      <div>
        <Search />
        <FilmList />
      </div>
    </div>
  );
};
