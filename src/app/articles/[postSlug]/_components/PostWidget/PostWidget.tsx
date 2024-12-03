import { PostApiResponse } from "@/infrastructure/request/PostRequest";
import Markdown from "react-markdown";
import { PostDateUtil } from "@/utils/PostDateUtil";
import styles from "./PostWidget.module.css";
import { BiLeftArrowAlt } from "react-icons/bi";

export function PostWidget({
  title,
  content,
  publishedAt,
  updatedAt,
}: Omit<PostApiResponse, "documentId" | "slug">) {
  return (
    <main className={styles.main}>
      <a className="link icon-left" href="/">
        <BiLeftArrowAlt size={20} />
        Revenir aux articles
      </a>

      <article className={styles.article}>
        <h1>{title}</h1>

        <header className={styles.header}>
          Publié le{" "}
          <time dateTime={publishedAt}>
            {PostDateUtil.getReadableFormat(publishedAt)}
          </time>
          ,{" "}
          <span className={styles.updatedAt}>
            mis à jour le{" "}
            <time dateTime={updatedAt}>
              {PostDateUtil.getReadableFormat(updatedAt)}
            </time>
          </span>
        </header>

        <section>
          <Markdown>{content}</Markdown>
        </section>
      </article>
    </main>
  );
}
