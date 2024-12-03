import { PostRequest } from "@/infrastructure/request/PostRequest";
import { ApiClient } from "@/infrastructure/request/ApiClient";
import { PostsList } from "@/app/_components/PostsList/PostsList";

export default async function Home() {
  const postRequest = new PostRequest(new ApiClient());
  const posts = await postRequest.getAllByPage(1);

  return <PostsList posts={posts} />;
}
