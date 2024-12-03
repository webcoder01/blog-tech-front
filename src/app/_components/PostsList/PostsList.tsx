import { PostApiResponse } from "@/infrastructure/request/PostRequest";
import { PostOverview } from "@/app/_components/PostOverview/PostOverview";
import "dayjs/locale/fr";
import styles from "./PostsList.module.css";
import dayjs from "dayjs";

interface PostsListProps {
  posts: PostApiResponse[];
}

export function PostsList({ posts }: PostsListProps) {
  return (
    <section className={styles.section}>
      {posts.map(({ documentId, slug, title, content, publishedAt }) => (
        <PostOverview
          key={documentId}
          slug={slug}
          title={title}
          content={content}
          publishedAt={getPublishedDateFormatted(publishedAt)}
        />
      ))}
    </section>
  );
}

function getPublishedDateFormatted(date: string): string {
  return dayjs(date).locale("fr").format("DD MMMM YYYY");
}
