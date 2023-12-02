if (process.env.NODE_ENV === "development") {
  if (typeof window !== "undefined") {
    import("tests/config/mocks/browser").then((module) =>
      module.worker.start({ quiet: true })
    );
  }
}
