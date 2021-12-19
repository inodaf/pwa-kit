/* eslint-disable no-undef */
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  swcMinify: true,
  pwa: {
    dest: "public",
    register: true,
    mode: "production",
    disable: true || process.env.NODE_ENV !== "production",
    customWorkerDir: "src/configurations/workers",
    buildExcludes: [/middleware-manifest.json$/],
    runtimeCaching,
  },
});
