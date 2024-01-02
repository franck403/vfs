// Register the Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(function (registration) {
      console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch(function (error) {
      console.error('Service Worker registration failed:', error);
    });
}

// sw.js file
self.addEventListener('fetch', function (event) {
  var url = new URL(event.request.url);

  // Intercept requests to the proxy path
  if (url.pathname.startsWith('/vfs')) {
    var filename = url.pathname.substring(4); // Remove '/vfs' from the path
    var vfs = new VFS();

    // Check if the file exists in the VFS
    if (vfs.files.hasOwnProperty(filename)) {
      var content = vfs.readFile(filename);
      var response = new Response(content);
      event.respondWith(response);
    }
  }
});
