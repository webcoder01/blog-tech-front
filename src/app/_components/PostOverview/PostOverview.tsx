import Markdown from "react-markdown";
import { BiRightArrowAlt } from "react-icons/bi";
import styles from "./PostOverview.module.css";

interface PostOverviewProps {
  title: string;
  content: string;
  publishedAt: string;
}

export function PostOverview({
  title,
  content,
  publishedAt,
}: PostOverviewProps) {
  return (
    <article className={styles.article}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>
        <Markdown>{content}</Markdown>
      </div>
      <footer className={styles.footer}>
        <span>
          Publié le <time dateTime={publishedAt}>{publishedAt}</time>
        </span>
        <a className={styles.button} href="">
          Lire l&#39;article <BiRightArrowAlt size={20} />
        </a>
      </footer>
    </article>
  );
}
