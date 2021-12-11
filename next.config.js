/* eslint-disable no-undef */
const withPWA = require("next-pwa");
const canRegisterSW = process.env.NODE_ENV === "production";

module.exports = withPWA({
  swcMinify: true,
  pwa: {
    dest: "public",
    register: canRegisterSW,
    mode: process.env.NODE_ENV || "development",
    swSrc: "./src/configurations/workers/service-worker.ts",
  },
});
