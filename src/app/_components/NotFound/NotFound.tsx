import styles from "./NotFound.module.css";

export function NotFound() {
  return (
    <main className={styles.main}>
      <p>La page demandée n&apos;existe pas.</p>

      <a className="btn btn-primary" href="/">
        Retournez sur la page d&apos;accueil
      </a>
    </main>
  );
}
