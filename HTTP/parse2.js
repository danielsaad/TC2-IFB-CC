function parseJSON(req,res,next) {
	if(req.headers['content-type'] == 'application/json') {
		var readData = '';
		req.on('data',function(data){
			readData +=data;
		});

		req.on('end', function(){
			console.log(readData);
			try	{
				req.body = JSON.parse(readData);
			}
			catch(e) {
				console.log("Not a valid JSON!");
			}
			next();
		});
	}
	else {
		next();
	}
}


var connect = require('connect');
connect()
	.use(parseJSON)
	.use(function(req,res){
		if(req.body){
			res.end('JSON parsed! value of foo: '+req.body.foo);
		}
		else {
			res.end('no JSON detected!');
		}
	})
	.listen(3000);
