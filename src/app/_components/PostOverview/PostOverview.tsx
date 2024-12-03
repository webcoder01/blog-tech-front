import Markdown from "react-markdown";
import { BiRightArrowAlt } from "react-icons/bi";
import styles from "./PostOverview.module.css";
import { PostApiResponse } from "@/infrastructure/request/PostRequest";

export function PostOverview({
  slug,
  title,
  content,
  publishedAt,
}: Omit<PostApiResponse, "documentId">) {
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
        <a className={styles.button} href={`/articles/${slug}`}>
          Lire l&#39;article <BiRightArrowAlt size={20} />
        </a>
      </footer>
    </article>
  );
}
