declare global {
  type ManifestEntry = { url: string; revision: string };

  interface Window {
    __WB_MANIFEST: ManifestEntry[];
  }
}

export {};
