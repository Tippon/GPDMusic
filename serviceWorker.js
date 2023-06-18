const staticGPDMusic = "gpdmusic-site-v1"
const assets = [
  "/",
  "/index.html",
  "/about.html",
  "/bandfinder.html",
  "/css/style.css",
  "/js/app.js",
  "/js/footer.js",
  "/js/header.js",
  "/images/Cover.png",
  "/images/Graham.jpg",
    
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticGPDMusic).then(cache => {
      cache.addAll(assets)
    })
  )
})
self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})