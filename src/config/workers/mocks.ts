import { isBrowser } from "@/utilities";

if (process.env.NODE_ENV === "development") {
  if (isBrowser) {
    import("@/tests/config/mocks/browser").then((module) =>
      module.worker.start({ quiet: true }),
    );
  }
}
