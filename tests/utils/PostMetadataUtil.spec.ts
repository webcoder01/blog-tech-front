import { describe, expect, test } from "vitest";
import { PostMetadataUtil } from "@/utils/PostMetadataUtil";

describe("PostMetadataUtil", () => {
  test("getMetadata() should return title with 'Blog de Antoine Raymond' as a prefix", () => {
    const metadata = PostMetadataUtil.getMetadata("title", "description");

    expect(metadata.title).toBe("Blog de Antoine Raymond | title");
  });
});
