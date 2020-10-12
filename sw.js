const cacheNameOne = 'version_one'
const dynamicCacheName = 'weatherApp!'
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/css/style.css',
  '/assets/imgs/bgg.JPEG',
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
self.addEventListener("fetch", fetchEvent => {
  const { req } = fetchEvent;
  // console.log(req.url);

  fetchEvent.respondWith(
    caches
      .match(req)
      .then(res => {
        // return res || fetch(fetchEvent.req);
        if (res) {
          return res;
        }

        if (!req.url.includes("https://api.openweathermap.org/data/2.5/")) {
          return fetch(req);
        } else {
          // console.log(req.url);
          return fetch(req).then(res => {
            // console.log(res);

            return caches
              .open(dynamicCacheName)
              .then(cache => {
                cache.put(req.url, res.clone());
                return res;
              })
              .catch(err => console.log(err));
          });
        }
      })
      .catch(err => console.log(err))
  );
});