import { isBrowser } from "@/utilities";

if (process.env.NODE_ENV === "development") {
  if (isBrowser) {
    const { worker } = require("@config/mocks/browser");
    worker.start();
  }
}
