import styles from "./layout.module.css";

export const Layout = ({ children }) => {
  return <main className={styles.layout}>{children}</main>;
};
