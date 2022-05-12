/* eslint-disable no-undef, @typescript-eslint/no-var-requires */
const withPWA = require("next-pwa");
const csp = require("./src/configurations/security/csp");

/** @type {import('next').NextConfig} */
const config = {
  swcMinify: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
        { key: "Content-Security-Policy", value: csp },
      ],
    },
  ],
};

module.exports = withPWA({
  ...config,
  pwa: {
    dest: "public",
    register: true,
    mode: "production",
    disable: process.env.NODE_ENV !== "production",
    customWorkerDir: "src/configurations/workers",
  },
});
