import { BiError } from "react-icons/bi";
import styles from "./ErrorMessage.module.css";

export function ErrorMessage() {
  return (
    <main className="container">
      <p className={styles.title}>
        <BiError size={40} /> Mince ! Un problème est survenu
      </p>

      <p>
        Les articles n&apos;ont pas pu être récupérés.
        <br />
        Patientez quelques minutes puis réessayez.
      </p>

      <p>
        Mais n&apos;ayez crainte !<br />
        L&apos;administrateur du site sera rapidement informé, si ce n&apos;est
        déjà fait.
      </p>
    </main>
  );
}
