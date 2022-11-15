// Perform install steps
let CACHE_NAME = 'my-cache';
let urlsToCache = [
    'css/estilos.css',
    'imagenes/icono1.svg',
    'imagenes/icono2.png',
    'imagenes/icono3.png',
    'imagenes/imagen1.png',
    'imagenes/imagen2.png',
    'js/menu.js'
    ];

self.addEventListener('install', function(event) {
// Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Opened cache');
        return cache.addAll(urlsToCache);
        })
    );
});


self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
});


self.addEventListener('activate', function(event) {
    var cacheWhitelist = ['pigment'];
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });