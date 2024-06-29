import { useUserContext } from "../../contexts/user";
import { useState } from "react";
import { Modal } from "../modal/component";
import styles from "./header.module.css";

export const Header = () => {
  const { user, logout } = useUserContext();
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className={styles.head}>
      <h1 className={styles.title}>Фильмопоиск</h1>
      {user ? (
        <button onClick={logout}>Выйти</button>
      ) : (
        <button onClick={() => setIsVisible(true)} className={styles.btn}>
          Войти
        </button>
      )}
      {isVisible && <Modal onClose={() => setIsVisible(false)}></Modal>}
    </div>
  );
};
