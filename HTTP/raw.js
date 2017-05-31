var http = require('http');

var server = http.createServer(function(request,response){
	console.log('Request starting...');

	response.write('Hello client!');
	response.end();
});

server.listen(3000);
console.log('Server running at localhost:3000');
