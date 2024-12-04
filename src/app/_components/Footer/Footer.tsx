import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.list}>
        <li>
          <a className={styles.link} href="/mentions-legales">
            Mentions légales
          </a>
        </li>
      </ul>
    </footer>
  );
}
