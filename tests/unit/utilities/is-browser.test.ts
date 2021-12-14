import { isBrowser } from "@/utilities";

test("when in browser env, returns true", async () => {
  expect(isBrowser).toBe(true);
});
