var express = require('express');
var http = require('http');

var app = express()
			.use(function(req,res,next){
				res.end('Hello Express');
			});
http.createServer(app).listen(3000);
