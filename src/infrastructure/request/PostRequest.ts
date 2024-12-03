import { ApiClientInterface } from "@/infrastructure/request/ApiClient";

export interface PostApiResponse {
  documentId: string;
  slug: string;
  title: string;
  content: string;
  publishedAt: string;
}

export interface PostRequestInterface {
  findOneBySlug(postSlug: string): Promise<PostApiResponse | null>;
  getAllByPage(page: number): Promise<PostApiResponse[]>;
}

export class PostRequest implements PostRequestInterface {
  private apiClient: ApiClientInterface;

  constructor(apiClient: ApiClientInterface) {
    this.apiClient = apiClient;
  }

  async findOneBySlug(postSlug: string): Promise<PostApiResponse | null> {
    return await this.apiClient.findResource<PostApiResponse>(
      `/posts?filters[slug][$eq]=${postSlug}`,
    );
  }

  async getAllByPage(page: number): Promise<PostApiResponse[]> {
    return await this.apiClient.getCollectionByPage<PostApiResponse[]>(
      "/posts",
      page,
    );
  }
}
