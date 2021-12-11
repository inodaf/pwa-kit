/**
 * @jest-environment node
 */
import { isBrowser } from "@/utilities/is-browser";

test("when in node env, returns false", () => {
  expect(isBrowser).toBe(false);
});
