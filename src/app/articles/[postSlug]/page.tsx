import {
  PostApiResponse,
  PostRequest,
} from "@/infrastructure/request/PostRequest";
import { ApiClient } from "@/infrastructure/request/ApiClient";
import { notFound } from "next/navigation";
import { PostWidget } from "@/app/articles/[postSlug]/_components/PostWidget/PostWidget";
import { Metadata } from "next";
import { PostMetadataUtil } from "@/utils/PostMetadataUtil";

interface PageParams {
  params: {
    postSlug: string;
  };
}

async function findPost(postSlug: string): Promise<PostApiResponse | null> {
  const postRequest = new PostRequest(new ApiClient());

  return await postRequest.findOneBySlug(postSlug);
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const post = await findPost(params.postSlug);

  return PostMetadataUtil.getMetadata(post?.title, post?.description);
}

export default async function Page({ params }: PageParams) {
  const post = await findPost(params.postSlug);
  if (post === null) {
    notFound();
  }

  return (
    <PostWidget
      title={post.title}
      content={post.content}
      publishedAt={post.publishedAt}
      updatedAt={post.updatedAt}
    />
  );
}
