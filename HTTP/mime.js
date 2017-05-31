var mime = require('mime');

mime.lookup('/path/to/file.txt'); // => 'text/plain'
mime.lookup('file.txt'); // => 'text/plain'
mime.lookup('.txt'); // => 'text/plain'
mime.lookup('.html'); // => 'text/html'
mime.lookup('stylesheet.css') // => 'text/css'
