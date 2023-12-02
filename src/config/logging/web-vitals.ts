import type { NextWebVitalsMetric } from "next/app";

const metrics = new Set<NextWebVitalsMetric>();
const isCollectEnabled = false; /* enable if needed */
const apiPath = ""; /* add your api */

if (typeof window !== "undefined") {
  window.addEventListener("pagehide", report);
}

function report() {
  if (!metrics.size) return;
  if (!isCollectEnabled || !apiPath) return;

  navigator.sendBeacon(apiPath, JSON.stringify([...metrics]));
  metrics.clear();
}

export function collectWebVitals(metric: NextWebVitalsMetric) {
  return metrics.add(metric);
}
