import process from "node:process";

const CSP = {
  "default-src": ["'self'"],
  "connect-src": ["'self'"],
  "script-src": ["'self'"],
  "style-src": ["'self'"],
};

/**
 * @param {keyof CSP} directive
 * @param {string[]} value
 */
function updatePolicy(directive, ...value) {
  if (CSP[directive]) CSP[directive].push(...value);
  return null;
}

if (process.env.NODE_ENV === "development") {
  updatePolicy("script-src", "'unsafe-eval'", "'unsafe-inline'");
  updatePolicy("style-src", "'unsafe-inline'");
}

const toCSPString = (policy, directive) =>
  policy.concat(`${directive} ${CSP[directive].join(" ")}; `);

export default Object.keys(CSP)
  .reduce(toCSPString, "")
  .replace(/\s{2,}/g, " ")
  .trim();
