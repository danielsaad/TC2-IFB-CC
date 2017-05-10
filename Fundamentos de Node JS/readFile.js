var fs = require('fs');

fs.readFile('./some_text_file.txt',function(err,data){
	if(error){
		throw error;
	}
	...
})
