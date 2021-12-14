/* eslint-disable no-undef */
const withPWA = require("next-pwa");

module.exports = withPWA({
  swcMinify: true,
  pwa: {
    dest: "public",
    register: true,
    disable: process.env.NODE_ENV !== "production",
    mode: "production",
    customWorkerDir: "src/configurations/workers",
  },
});
