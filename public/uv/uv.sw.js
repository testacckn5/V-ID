/* This is the missing Service Worker script */
importScripts('./uv.bundle.js');
importScripts('./uv.config.js');
importScripts('./uv.sw.js'); 

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => {
    event.respondWith(sw.fetch(event));
});
