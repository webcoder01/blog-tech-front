import { describe, expect, test } from "vitest";
import { PostDateUtil } from "@/utils/PostDateUtil";
import dayjs from "dayjs";

describe("PostDateUtil", () => {
  test("getReadableFormat() should return expected date string", () => {
    const date = dayjs("2000/01/01");
    const readableDate = PostDateUtil.getReadableFormat(date.toISOString());

    expect(readableDate).toBe("01 janvier 2000");
  });
});
