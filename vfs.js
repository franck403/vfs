import indexeddbFs from 'https://cdn.jsdelivr.net/npm/indexeddb-fs@2.1.5/+esm';
var fs = indexeddbFs

async function main() {
  // Create a new directory and subdirectories
  await fs.createDirectory('my_directory');
  await fs.createDirectory('my_directory/subdirectory');
  await fs.createDirectory('my_directory/another_subdirectory');

  // Write some content to a file
  const content = 'Hello, world!';
  await fs.writeFile('my_directory/my_file.txt', content);

  // Check if a file exists and if it's a file
  const fileExists = await fs.exists('my_directory/my_file.txt');
  const isAFile = await fs.isFile('my_directory/my_file.txt');

  console.log('File exists:', fileExists); // true
  console.log('Is a file:', isAFile); // true

  // Copy the file to a new location
  await fs.copyFile('my_directory/my_file.txt', 'my_directory/another_subdirectory/my_file_copy.txt');

  // Rename and move the original file to a new location
  await fs.renameFile('my_directory/my_file.txt', 'my_directory/new_file_name.txt');
  await fs.moveFile('my_directory/new_file_name.txt', 'my_directory/subdirectory/new_location.txt');

  // Read the contents of a directory and count the number of files and subdirectories
  const { filesCount, directoriesCount } = await fs.readDirectory('my_directory');

  console.log('Number of files:', filesCount); // 0
  console.log('Number of subdirectories:', directoriesCount); // 2

  // Remove the directory and all files within it
  await fs.removeDirectory('my_directory');

  // Read the contents of the copied file
  const copiedFileContent = await fs.readFile('my_directory/another_subdirectory/my_file_copy.txt');

  console.log('Copied file content:', copiedFileContent); // "Hello, world!"
}

main();
