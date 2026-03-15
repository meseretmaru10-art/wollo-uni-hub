const cacheName = 'wollo-uni-v2';
const assets = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './icon.png',
  './manifest.json'
];

// 1. ፋይሎቹን በስልኩ ሜሞሪ ላይ ለመጫን (Install)
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('Caching assets for offline use...');
      return cache.addAll(assets);
    })
  );
});

// 2. አሮጌ መረጃዎችን ለማጥፋት (Activate)
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== cacheName)
            .map(key => caches.delete(key))
      );
    })
  );
});

// 3. ኢንተርኔት በሌለበት ጊዜ መረጃውን ለማቅረብ (Fetch)
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    }).catch(() => {
      // ፋይሉ በካሽ ውስጥ ከሌለ እና ኢንተርኔት ከጠፋ
      if (e.request.mode === 'navigate') {
        return caches.match('./index.html');
      }
    })
  );
});
