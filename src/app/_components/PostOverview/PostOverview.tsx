import { BiRightArrowAlt } from "react-icons/bi";
import { PostApiResponse } from "@/infrastructure/request/PostRequest";
import styles from "./PostOverview.module.css";

export function PostOverview({
  slug,
  title,
  description,
  publishedAt,
}: Omit<PostApiResponse, "documentId" | "content" | "updatedAt">) {
  return (
    <article className={styles.article}>
      <h2 className={styles.title}>{title}</h2>
      <div>{description}</div>
      <footer className={styles.footer}>
        <span>
          Publié le <time dateTime={publishedAt}>{publishedAt}</time>
        </span>
        <a className="link" href={`/articles/${slug}`}>
          Lire l&#39;article <BiRightArrowAlt size={20} />
        </a>
      </footer>
    </article>
  );
}
