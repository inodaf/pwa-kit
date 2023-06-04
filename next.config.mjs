import process from "node:process";
import pwa from "next-pwa";
import csp from "./src/config/security/csp.mjs";

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        { key: "Content-Security-Policy", value: csp },
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
        { key: "X-Content-Type-Options", value: "nosniff" },
      ],
    },
  ],
};

export default pwa({
  dest: "public",
  register: true,
  mode: "production",
  disable: process.env.NODE_ENV !== "production",
  customWorkerDir: "src/config/workers",
})(config);
