const CACHE_NAME = 'dkt-qr-generator-v2';
const CORE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];

// Instalar y precachear archivos base
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(CORE_ASSETS))
  );
  self.skipWaiting(); // activa inmediatamente
});

// Activar y limpiar versiones viejas
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => 
      Promise.all(keys.map(key => key !== CACHE_NAME && caches.delete(key)))
    )
  );
  self.clients.claim(); // toma control de todas las pestañas
});

// Estrategia: Cache First + actualización silenciosa
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Ignora peticiones externas
  if (url.origin !== self.location.origin) return;

  // Navegación SPA → siempre devuelve index.html
  if (req.mode === 'navigate') {
    event.respondWith(caches.match('/index.html'));
    return;
  }

  // Cache First + actualización de fondo
  event.respondWith((async () => {
    const cached = await caches.match(req);
    if (cached) {
      // actualiza en segundo plano
      fetch(req).then(res => {
        caches.open(CACHE_NAME).then(cache => cache.put(req, res.clone()));
      }).catch(() => {});
      return cached;
    }

    // si no hay cache, busca online y guarda
    try {
      const res = await fetch(req);
      if (res.ok) {
        const cache = await caches.open(CACHE_NAME);
        cache.put(req, res.clone());
      }
      return res;
    } catch (err) {
      return caches.match('/index.html'); // fallback en modo offline
    }
  })());
});
