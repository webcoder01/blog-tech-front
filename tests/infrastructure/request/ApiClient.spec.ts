import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { ApiClient } from "@/infrastructure/request/ApiClient";

global.fetch = vi.fn().mockResolvedValue({
  ok: true,
  json: vi.fn().mockResolvedValue({ data: { key: "value" } }),
});

describe("ApiClient", () => {
  const originalEnv = { ...process.env };
  beforeEach(() => {
    process.env.API_URL = "http://localhost:1337/api";
    process.env.API_TOKEN = "api_token";
  });

  afterEach(() => {
    process.env = originalEnv;
    vi.clearAllMocks();
  });

  test("getCollectionByPage() should calls fetch with GET method and expected headers", async () => {
    const apiClient = new ApiClient();
    await apiClient.getCollectionByPage("/resources", 1);

    expect(fetch).toHaveBeenCalledWith(
      "http://localhost:1337/api/resources?pagination[page]=1&pagination[pageSize]=10",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer api_token",
        },
      },
    );
  });

  test("getCollectionByPage() should returns data when there api response status is OK", async () => {
    const apiClient = new ApiClient();
    const data = await apiClient.getCollectionByPage("/resources", 1);

    expect(data).toStrictEqual({ key: "value" });
  });
});
