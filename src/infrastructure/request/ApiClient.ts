export interface ApiClientInterface {
  getCollectionByPage<T>(url: string, page: number): Promise<T>;
}

export class ApiClient implements ApiClientInterface {
  async getCollectionByPage<T>(url: string, page: number): Promise<T> {
    const uri = this.getUriWithPagination(url, page);
    const response = await fetch(uri, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    });

    if (response.ok) {
      const responseData: { data: T } = await response.json();

      return responseData.data;
    }

    throw new Error("Api error");
  }

  private getUriWithPagination(url: string, page: number): string {
    return `${process.env.API_URL}${url}?pagination[page]=${page}&pagination[pageSize]=10`;
  }
}
