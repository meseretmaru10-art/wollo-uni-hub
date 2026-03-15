const CACHE_NAME = 'wollo-uni-hub-v6';

// ያለ ዳታ እንዲከፈቱ የሚቀመጡ ዋና ዋና ፋይሎች ዝርዝር
const assets = [
  './',
  './index.html',
  './manifest.json',
  './style.css',
  './script.js',
  './icon.png'
];

// ፋይሎቹን መጀመሪያ ሲከፈት በስልኩ ላይ መጫን
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Caching main assets for offline use...');
      return cache.addAll(assets);
    })
  );
});

// አሮጌ ካሽ ካለ አዲሱን ስሪት ለማስገባት ማጽዳት
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
});

// ዳታ በሌለበት ጊዜ መረጃን ከስልኩ ካሽ መጥራት
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
