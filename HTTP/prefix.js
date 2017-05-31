function echo(req,res,next){
	req.pipe(res);
}

var connect = require('connect');
connect()
	.use('/echo',echo)
	.use(function(req,res){ res.end('olá');})
	.listen(3000);
