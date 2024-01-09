import { configure, BFSRequire } from 'browserfs';

// you can also add a callback as the last parameter instead of using promises
await configure({ fs: 'LocalStorage' });

const fs = BFSRequire('fs');

// Now, you can write code like this:

fs.writeFile('/test.txt', 'Cool, I can do this in the browser!', function(err) {
	fs.readFile('/test.txt', function(err, contents) {
		console.log(contents.toString());
	});
});
