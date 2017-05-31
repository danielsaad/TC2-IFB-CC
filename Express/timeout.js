var express = require('express');
var timeout = require('connect-timeout');

var app = express()
	.use('/api',function(req,res,next){
		//Não envia a resposta ao cliente.
	})
	.listen(3000);
