/* eslint-disable no-undef */
const CSP = {
  "default-src": ["'self'"],
  "script-src": ["'self'"],
  "style-src": ["'self'"],
};

if (process.env.NODE_ENV === "development") {
  CSP["script-src"].push("'unsafe-eval'", "'unsafe-inline'");
  CSP["style-src"].push("'unsafe-inline'");
}

module.exports = Object.keys(CSP)
  .reduce((policy, key) => policy.concat(`${key} ${CSP[key].join(" ")};`), "")
  .replace(/\s{2,}/g, " ")
  .trim();
