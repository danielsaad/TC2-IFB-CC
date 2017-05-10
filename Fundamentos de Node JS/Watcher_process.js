watcher.on('process',function process(file){
	var watchFile = this.watchDir; + '/' + file;
	var processedFile = this.processedDir + '/' + file.toLowerCase();

	fs.rename(watchFile,processedFile,function(err){
		if(err){
			throw err;
		}
	});
});

var watcher = new Watcher(watchDir,processedDir);
watcher.start();
