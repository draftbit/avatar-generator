// Self-destroying service worker.
//
// The pre-2026 Gatsby site (gatsby-plugin-offline) registered a service
// worker at this URL that cached the entire app shell, so returning
// visitors get the old site served from cache. When their browser
// fetches this file on its background update check, this worker takes
// over, purges every cache, unregisters itself, and reloads open tabs
// so they pick up the current site immediately.
//
// Safe to delete once old-site traffic has died off.

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: "window" });
      clients.forEach((client) => client.navigate(client.url));
    })(),
  );
});
