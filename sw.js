var cacheStorageKey = 'minimal-pwa-2';
console.log(self);

var cacheList = [
    "/",
    "index.html",
    "index.css",
    "app_icon.png"
]
self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(cacheStorageKey)
            .then(cache => cache.addAll(cacheList))
            .then(() => self.skipWaiting())
    )
})
self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            if(response != null) {
                return response
            }
            return fetch(e.request.url)
        })
    )
})
// self.addEventListener('activate', function(e) {
//     e.waitUntil(
//         caches.keys().then(cacheNames => {
//             return Promise.all(
//                 cacheNames.filter(cacheNames => {
//                     return cacheNames != cacheStorageKey
//                 }).map(cacheNames => {
//                     return caches.delete(cacheNames)
//                 })
//             )
//         }).then(() => {
//             return self.clients.claim()
//         })
//     )
// })