/* eslint-disable no-undef, @typescript-eslint/no-var-requires */
const { resolve } = require("node:path");
const dotenv = require("dotenv-flow");
const withPWA = require("next-pwa");
const csp = require("./src/configurations/security/csp");

/** @type {import('next').NextConfig} */
const config = {
  swcMinify: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  env: dotenv.config({
    node_env: process.env.APP_ENV,
    path: resolve(process.cwd(), "./config/envs"),
  }).parsed,
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
