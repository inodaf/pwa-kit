import { isOfflineAvailable } from "@/utilities/offline-experience";

test("when manifest contains the given path, returns true", () => {
  const manifest: ManifestEntry[] = [{ url: "/", revision: "1" }];
  expect(isOfflineAvailable("/", manifest)).toBe(true);
});

test("when manifest does not contain the given path, returns false", () => {
  const manifest: ManifestEntry[] = [{ url: "/", revision: "1" }];
  expect(isOfflineAvailable("/foo", manifest)).toBe(false);
});
