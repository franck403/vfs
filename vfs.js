function VFS() {
  this.files = {};
  this.proxyPath = '/vfs'; // Proxy path for file requests
}
VFS.prototype.addFile = function (filename, content) {
  this.files[filename] = content;
};

VFS.prototype.deleteFile = function (filename) {
  delete this.files[filename];
};

VFS.prototype.readFile = function (filename) {
  return this.files[filename];
};
// Register the Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.vfs.js')
    .then(function (registration) {
      console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch(function (error) {
      console.error('Service Worker registration failed:', error);
    });
}
