/* Optimized Service Worker */
importScripts('./uv.bundle.js');
importScripts('./uv.config.js');

const uvService = new UVServiceWorker();

self.addEventListener('fetch', (event) => {
    event.respondWith(uvService.fetch(event));
});
