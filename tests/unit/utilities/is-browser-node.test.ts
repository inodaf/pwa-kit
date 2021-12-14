/**
 * @jest-environment node
 */
import { isBrowser } from "@/utilities";

test("when in node env, returns false", () => {
  expect(isBrowser).toBe(false);
});
