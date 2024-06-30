import { useDispatch } from "react-redux";
import styles from "./search.module.css";
import { setSearch } from "../../redux/slices/search";

export const Search = () => {
  const dispatch = useDispatch();
  return (
    <input
      type="search"
      placeholder="Название фильма"
      className={styles.search}
      onChange={(e) => {
        dispatch(setSearch(e.currentTarget.value));
        console.log("e.currentTarget.value :>> ", e.currentTarget.value);
      }}
    />
  );
};
