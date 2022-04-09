/* eslint-disable no-undef */
const withPWA = require("next-pwa");

/** @type {import('next').NextConfig} */
const config = {
  swcMinify: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
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
