var express = require('express')

express()
	.use(function(req,res,next){
		res.end('Hello express!');
	})
	.listen(3000);
