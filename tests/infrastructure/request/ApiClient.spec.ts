import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { ApiClient } from "@/infrastructure/request/ApiClient";

const mockJsonApiResponse = vi.fn();

global.fetch = vi.fn().mockResolvedValue({
  ok: true,
  json: mockJsonApiResponse,
});

describe("ApiClient", () => {
  const originalEnv = { ...process.env };
  beforeEach(() => {
    mockJsonApiResponse.mockResolvedValue({ data: [{ key: "value" }] });
    process.env.API_URL = "http://localhost:1337/api";
    process.env.API_TOKEN = "api_token";
  });

  afterEach(() => {
    process.env = originalEnv;
    vi.clearAllMocks();
  });

  test("findResource() should call fetch with GET method and expected headers", async () => {
    const apiClient = new ApiClient();
    await apiClient.findResource("/resource?key=value");

    expect(fetch).toHaveBeenCalledWith(
      "http://localhost:1337/api/resource?key=value",
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

  test("findResource() should return resource when api response is OK and resource exists", async () => {
    const apiClient = new ApiClient();
    const resource = await apiClient.findResource("/resource?key=value");

    expect(resource).toStrictEqual({ key: "value" });
  });

  test("findResource() should return null when api response is OK and resource is not found", async () => {
    mockJsonApiResponse.mockResolvedValue({ data: [] });

    const apiClient = new ApiClient();
    const resource = await apiClient.findResource("/resource?unknown=value");

    expect(resource).toBeNull();
  });

  test("getCollectionByPage() should call fetch with GET method and expected headers", async () => {
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

  test("getCollectionByPage() should return data when api response status is OK", async () => {
    const apiClient = new ApiClient();
    const data = await apiClient.getCollectionByPage("/resources", 1);

    expect(data).toStrictEqual([{ key: "value" }]);
  });

  test("getResource() should call fetch with GET method and expected headers", async () => {
    const apiClient = new ApiClient();
    await apiClient.getResource("/resource");

    expect(fetch).toHaveBeenCalledWith("http://localhost:1337/api/resource", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer api_token",
      },
    });
  });

  test("getResource() should return resource when api response status is OK", async () => {
    mockJsonApiResponse.mockResolvedValue({ data: { key: "value" } });
    const apiClient = new ApiClient();
    const data = await apiClient.getResource("/resource");

    expect(data).toStrictEqual({ key: "value" });
  });
});
