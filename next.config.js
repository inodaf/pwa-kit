/* eslint-disable no-undef, @typescript-eslint/no-var-requires */
const csp = require("./src/configurations/security/csp");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  mode: "production",
  disable: process.env.NODE_ENV !== "production",
  customWorkerDir: "src/configurations/workers",
});

/** @type {import('next').NextConfig} */
const config = {
  swcMinify: true,
  reactStrictMode: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  headers: () => [
    {
      source: "/:path*",
      headers: [
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
        { key: "Content-Security-Policy", value: csp },
      ],
    },
  ],
};

module.exports = withPWA(config);
