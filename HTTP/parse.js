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
