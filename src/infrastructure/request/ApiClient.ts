export interface ApiClientInterface {
  findResource<T>(url: string): Promise<T | null>;
  getCollectionByPage<T>(url: string, page: number): Promise<T>;
}

export class ApiClient implements ApiClientInterface {
  async findResource<T>(url: string): Promise<T | null> {
    const uri = this.getUri(url);
    const response = await fetch(uri, {
      method: "GET",
      headers: { ...this.getDefaultHeaders() },
    });

    if (response.ok) {
      const responseData: { data: Array<T> } = await response.json();

      return responseData.data.length ? responseData.data[0] : null;
    }

    throw new Error("Api error");
  }

  async getCollectionByPage<T>(url: string, page: number): Promise<T> {
    const uri = this.getUriWithPagination(url, page);
    const response = await fetch(uri, {
      method: "GET",
      headers: { ...this.getDefaultHeaders() },
    });

    if (response.ok) {
      const responseData: { data: T } = await response.json();

      return responseData.data;
    }

    throw new Error("Api error");
  }

  private getUri(url: string): string {
    return `${process.env.API_URL}${url}`;
  }

  private getUriWithPagination(url: string, page: number): string {
    return `${process.env.API_URL}${url}?pagination[page]=${page}&pagination[pageSize]=10`;
  }

  private getDefaultHeaders(): Record<string, string> {
    return {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    };
  }
}
