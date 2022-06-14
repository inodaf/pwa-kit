const CSP = {
  "default-src": ["'self'"].join(" "),
  "script-src": ["'self'", "'unsafe-eval'", "'unsafe-inline'"].join(" "),
  "style-src": ["'self'", "'unsafe-inline'"].join(" "),
};

// eslint-disable-next-line no-undef
module.exports = Object.keys(CSP)
  .reduce((policy, key) => policy.concat(`${key} ${CSP[key]};`), "")
  .replace(/\s{2,}/g, " ")
  .trim();
