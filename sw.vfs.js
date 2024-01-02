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
