"use client";

import { BiMenu, BiX } from "react-icons/bi";
import styles from "./Header.module.css";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div>
          <span className={styles.welcome}>Bienvenue !</span>
          <p className={styles.introducing}>
            Je m&apos;appelle <strong>Antoine Raymond</strong>, je suis un
            développeur Web qui a un faible pour PHP
          </p>
        </div>

        <nav>
          <ul className={`${styles.list} ${isMenuOpen ? styles.listOpen : ""}`}>
            <div className={styles.listContainer}>
              <button
                type="button"
                className={`${styles.closeList} ${styles.menuAction}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <BiX size={40} /> Fermer
              </button>

              <li>
                <a className={styles.listTabLink} href="/">
                  Articles
                </a>
              </li>
            </div>
          </ul>

          <button
            type="button"
            className={styles.menuAction}
            onClick={() => setIsMenuOpen(true)}
          >
            <BiMenu size={40} /> Menu
          </button>
        </nav>
      </div>
    </header>
  );
}
