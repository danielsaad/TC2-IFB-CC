
Watcher.prototype.watch = function(){
	var watcher = this;
	fs.readdir(this.watchDir, function(err,files) {
		if (err) {
			throw err;
		}
		for( var index in files) {
			watcher.emit('process', files[index])
		}
	});
}

Watcher.prototype.start(function()){
	var watcher = this;
	fs.watch(watchDir,function(){
		watcher.watch();
	});
}
