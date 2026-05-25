// Service Worker - Mi Dashboard · Rubén
const CACHE_NAME = 'dashboard-v9-config-fix';
const ASSETS = [
  '/dashboard.html',
  '/manifest.json',
  'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,200;0,9..144,400;0,9..144,600;1,9..144,200;1,9..144,600&family=Geist+Mono:wght@300;400;500&display=swap',
  'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js'
];

// Instalar y cachear recursos
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS).catch(() => {
        // Si algún asset falla, continuar igual
        return Promise.resolve();
      });
    })
  );
  self.skipWaiting();
});

// Activar y limpiar caches antiguas
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Interceptar peticiones: primero network, fallback a cache
self.addEventListener('fetch', event => {
  // Solo interceptar GET
  if(event.request.method !== 'GET') return;

  // Firebase, Firestore y API de Anthropic: solo network (sin cache)
  const url = event.request.url;
  if(url.includes('firebase') || url.includes('firestore') || url.includes('googleapis.com/firestore') || url.includes('api.anthropic.com')) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Guardar en cache si es una respuesta válida
        if(response && response.status === 200 && response.type !== 'opaque') {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
        }
        return response;
      })
      .catch(() => {
        // Sin conexión: servir desde cache
        return caches.match(event.request).then(cached => {
          if(cached) return cached;
          // Fallback al dashboard principal
          if(event.request.destination === 'document') {
            return caches.match('/dashboard.html');
          }
        });
      })
  );
});
