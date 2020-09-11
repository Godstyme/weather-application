const cacheNameOne = 'version_one'
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/css/style.css',
  '/assets/js/app.js'
]

// ========= eventlistener for installation =========
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheNameOne)
      .then((cache) => {
        console.log('Opened cache')
        return cache.addAll(urlsToCache)
      })
  )
})

// ========= eventlistener for fetch =========
// self.addEventListener('fetch', (e) => {
//   e.respondWith(
//     caches.match(e.request)
//       .then((response) => {
//         if (response) {
//           return response
//         }
//         return fetch(e.request)
//       })
//   )
// })

// ========= eventlistener for activation =========
// self.addEventListener('activate', (e) => {
//   e.waitUntil(
//     caches.keys().then(cacheNames => {
//       return Promise.all(
//         cacheNames.map((cacheName) => {
//           if (cacheAllowlist.indexOf(cacheName) === -1) {
//             return caches.delete(cacheName)
//           }
//         })
//       )
//     })
//   )
// })
