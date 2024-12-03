import { PostApiResponse } from "@/infrastructure/request/PostRequest";
import { PostOverview } from "@/app/_components/PostOverview/PostOverview";
import styles from "./PostsList.module.css";
import { PostDateUtil } from "@/utils/PostDateUtil";

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
          publishedAt={PostDateUtil.getReadableFormat(publishedAt)}
        />
      ))}
    </section>
  );
}
