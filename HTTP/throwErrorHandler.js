var connect = require('connect')

connect()
	.use(function(req,res,next){
		throw new Error('Detalhamento do erro');
	})
	.use(function(req,res,next){
		res.end('Eu nunca serei chamado');
	})
	.use(function(err,req,res,next){
		console.log('Erro:',err.message);
		console.log('Stacktrace: ',err.stack);
		res.writeHead(500);
		res.end('Unable to process the request');
	})
	.listen(3000);
