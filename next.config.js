const withPWA = require('next-pwa');
const canRegisterSW = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  swcMinify: true,
  pwa: {
    dest: "public",
    register: canRegisterSW,
    mode: process.env.NODE_ENV || "development",
    swSrc: "./src/infra/workers/service-worker.ts",
  },
});