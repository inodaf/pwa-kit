import type { NextWebVitalsMetric } from "next/app";
import { isBrowser } from "@/utilities";

const metrics = new Set<NextWebVitalsMetric>();

const isCollectEnabled = false; /* enable if needed */
const apiPath = ""; /* add your api */

function report() {
  if (!metrics.size) return;
  if (!isCollectEnabled || !apiPath) return;

  navigator.sendBeacon(apiPath, JSON.stringify([...metrics]));
  metrics.clear();
}

if (isBrowser) window.addEventListener("pagehide", report);

export const collectWebVitals = (metric: NextWebVitalsMetric) =>
  metrics.add(metric);
