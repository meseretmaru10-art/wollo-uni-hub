const cacheName = 'kiot-v2'; // ስሙን ወደ v2 ቀይረው ብሮውዘሩ አዲስ መሆኑን እንዲያውቅ
const assets = [
  '/',
  '/index.html',
  '/style.css',      // የዲዛይን ፋይልህ ስም
  '/script.js',     // ሴክሽኑን የሚቀይረው የጃቫስክሪፕት ፋይልህ ስም
  '/manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

// አሮጌ ካሽ (Cache) ካለ እንዲያጠፋው
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== cacheName).map((key) => caches.delete(key))
      );
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
