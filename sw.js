const CACHE_NAME = 'ball-sort-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// Files ko phone me save (cache) karne ke liye
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Offline hone par saved files se game chalane ke liye
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
