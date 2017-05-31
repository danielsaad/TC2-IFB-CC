var http = require('http');

var server = http.createServer(function(req,res){
	console.log('Request headers');
	console.log(req.headers);

	res.write('hello client!');
	res.end();
}).listen(3000);

console.log('server running on port 3000');
