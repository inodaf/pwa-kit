/* eslint-disable no-undef */
const withPWA = require("next-pwa");

function parseCSP() {
  const policy = {
    "default-src": process.env.CSP_DEFAULT_SRC,
    "script-src": process.env.CSP_SCRIPT_SRC,
    "style-src": process.env.CSP_STYLE_SRC,
    "worker-src": process.env.CSP_WORKER_SRC,
    "img-src": process.env.CSP_IMG_SRC,
    "font-src": process.env.CSP_FONT_SRC,
    "child-src": process.env.CSP_CHILD_SRC,
    "connect-src": process.env.CSP_CONNECT_SRC,
    "frame-ancestors": process.env.CSP_FRAME_ANCESTORS,
    "form-action": process.env.CSP_FORM_ACTION,
  };

  return Object.keys(policy)
    .reduce((acc, key) => acc.concat(`${key} ${policy[key]};`), "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

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
        { key: "Content-Security-Policy", value: parseCSP() },
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
