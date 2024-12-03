import { ApiClientInterface } from "@/infrastructure/request/ApiClient";

export interface PostApiResponse {
  documentId: string;
  title: string;
  content: string;
  publishedAt: string;
}

export interface PostRequestInterface {
  getAllByPage(page: number): Promise<PostApiResponse[]>;
}

export class PostRequest implements PostRequestInterface {
  private apiClient: ApiClientInterface;

  constructor(apiClient: ApiClientInterface) {
    this.apiClient = apiClient;
  }

  async getAllByPage(page: number): Promise<PostApiResponse[]> {
    return await this.apiClient.getCollectionByPage<PostApiResponse[]>(
      "/posts",
      page,
    );
  }
}
