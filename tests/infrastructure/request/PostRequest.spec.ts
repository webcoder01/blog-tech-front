import { afterEach, describe, expect, test, vi } from "vitest";
import { PostRequest } from "@/infrastructure/request/PostRequest";
import { ApiClient } from "@/infrastructure/request/ApiClient";

global.fetch = vi.fn().mockResolvedValue({
  ok: true,
  json: vi.fn().mockResolvedValue({ data: [{ key: "value" }] }),
});

describe("PostRequest", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test("findOneBySlug() should call api client with expected url", async () => {
    const mockFindResourceOfClient = vi.spyOn(
      ApiClient.prototype,
      "findResource",
    );
    const postRequest = new PostRequest(new ApiClient());
    await postRequest.findOneBySlug("token");

    expect(mockFindResourceOfClient).toHaveBeenCalledWith(
      "/posts?filters[slug][$eq]=token",
    );
  });
});
