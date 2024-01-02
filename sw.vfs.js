self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("file-cache").then((cache) => {
      return cache.addAll(Object.keys(vfs.files));
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }

      return fetch(event.request).then((networkResponse) => {
        if (networkResponse.ok) {
          caches.open("file-cache").then((cache) => {
            cache.put(event.request, networkResponse.clone());
          });
        }

        return networkResponse;
      });
    })
  );
});
