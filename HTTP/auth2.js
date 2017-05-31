var connect = require('connect');

connect()
	.use(auth)
	.use(function(req,res){
		res.end('Authorized!');
	})
	.listen(3000);
