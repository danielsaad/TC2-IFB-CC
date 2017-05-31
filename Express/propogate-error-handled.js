var express = require('express');
var timeout = require('connect-timeout');

var app = express()
	.use('/api', timeout(5000),function(req,res,next){
		setTimeout(function(){
			console.log('Waking up')
			next();
		},6000)
	})
	.use(haltOnTimedout)
	.use(function(req,res,next){
		res.end('Done'); //nunca vai ser chamado
	})
	.listen(3000);


function haltOnTimedout(req,res,next){
	if(!req.timedout){
		next();
	}
}
