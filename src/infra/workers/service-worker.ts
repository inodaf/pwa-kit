/* eslint-disable no-restricted-globals */

import { matchPrecache } from "workbox-precaching/matchPrecache";
import { precacheAndRoute } from "workbox-precaching/precacheAndRoute";
import { setCatchHandler } from "workbox-routing/setCatchHandler";
import { isOfflineAvailable } from "@/infra/utils/offline-experience";

const WB_MANIFEST = self.__WB_MANIFEST;
const DEFAULT_REV = WB_MANIFEST[0].revision;
const DEFAULT_OFFLINE_PAGE = "/offline";

// Cache Pages for Offline Usage.
WB_MANIFEST.push({ url: "/offline", revision: DEFAULT_REV });
WB_MANIFEST.push({ url: "/", revision: DEFAULT_REV });

precacheAndRoute(WB_MANIFEST);
setCatchHandler(async (context) => {
  if (context.event.request.destination === "document") {
    const { pathname } = context.url;
    const offline = isOfflineAvailable(pathname, WB_MANIFEST);
    return matchPrecache(offline ? pathname : DEFAULT_OFFLINE_PAGE);
  }
  return Response.error();
});
