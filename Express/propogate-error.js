var express = require('express');
var timeout = require('connect-timeout');

var app = express()
	.use('/api', timeout(5000),function(req,res,next){
		setTimeout(function(){
			console.log('Waking up')
			next();
		},6000)
	})
	.use(function(req,res,next){
		res.end('Done'); //vai ser chamado após resposta já ter sido enviada
	})
	.listen(3000);
