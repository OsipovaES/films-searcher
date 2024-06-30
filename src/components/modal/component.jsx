import { createPortal } from "react-dom";
import close from "../../img/close.svg";
import styles from "./modal.module.css";
import classNames from "classnames";

export const Modal = ({ children, onClose }) => {
  return createPortal(
    <>
      <div
        onClick={onClose}
        className={classNames(styles.root, {
          [styles.interactive]: !!onClose,
        })}
      />
      <div className={styles.modal}>
        <form className={styles.form} action="">
          <span className={styles.head}>
            <h2 className={styles.title}>Авторизация</h2>
            <button className={styles.btn} onClick={onClose}>
              <img src={close} alt="Закрыть" width="14px" />
            </button>
          </span>
          <span className={styles.inputs}>
            <label>Логин</label>
            <input
              type="text"
              placeholder="Введите логин"
              className={styles.input}
            />
            <label>Пароль</label>
            <input
              type="text"
              placeholder="Введите пароль"
              className={styles.input}
            />
          </span>
          <span className={styles.button}>
            <button className={styles.buttonFilled}>Войти</button>
            <button className={styles.buttonEmpty} onClick={onClose}>
              Отменить
            </button>
          </span>
        </form>
        {children}
      </div>
    </>,
    document.body
  );
};
