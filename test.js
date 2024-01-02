// Create a new VFS instance
var vfs = new VFS();

// Add files to the VFS
vfs.addFile("file1.txt", "This is the content of file 1.");
vfs.addFile("file2.txt", "This is the content of file 2.");

// Fetch a file using the proxy path
fetch('/vfs/file1.txt')
  .then(function (response) {
    return response.text();
  })
  .then(function (content) {
    console.log(content); // Output: "This is the content of file 1."
  })
  .catch(function (error) {
    console.error('Error fetching file:', error);
  });
