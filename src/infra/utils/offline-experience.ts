export const isOfflineAvailable = (path: string, manifest: ManifestEntry[]) =>
  manifest.some((entry) => entry.url === path);
