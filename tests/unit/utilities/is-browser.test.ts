import { isBrowser } from "@/utilities/is-browser";

test("when in browser env, returns true", async () => {
  expect(isBrowser).toBe(true);
});
