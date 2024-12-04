import Markdown from "react-markdown";
import styles from "./LegalNotice.module.css";

interface LegalNoticeProps {
  content: string;
}

export function LegalNotice({ content }: LegalNoticeProps) {
  return (
    <main className="container">
      <h1>Mentions légales</h1>
      <section className={styles.section}>
        <Markdown>{content}</Markdown>
      </section>
    </main>
  );
}
