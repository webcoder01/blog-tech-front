import { ApiClientInterface } from "@/infrastructure/request/ApiClient";

export interface LegalNoticeApiResponse {
  content: string;
}

export class LegalNoticeRequest {
  private apiClient: ApiClientInterface;

  constructor(apiClient: ApiClientInterface) {
    this.apiClient = apiClient;
  }

  async get(): Promise<LegalNoticeApiResponse> {
    return await this.apiClient.getResource("/legal-notice");
  }
}
