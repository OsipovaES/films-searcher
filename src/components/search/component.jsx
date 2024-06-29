import styles from "./search.module.css";

export const Search = () => {
  return (
    <input
      type="text"
      placeholder="Название фильма"
      className={styles.search}
    />
  );
};
