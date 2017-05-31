var connect = require('connect')

connect()
	.use(function(req,res,next){
		next('Um erro ocorreu');
	})
	.use(function(req,res,next){
		res.end('Eu nunca serei chamado');
	})
	.listen(3000);
