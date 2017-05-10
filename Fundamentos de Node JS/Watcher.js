
var events = require('events');
var util = require('util');
var  fs = require('fs');
var util = require('util');

var watchDir = './watch';
var processedDir = './done';

function Watcher(watchDir, processedDir) {
	this.watchDir = watchDir;
	this.processedDir = processedDir;
}

util.inherits(Watcher,events.EventEmitter);


Watcher.prototype.watch = function(){
	watcher = this;
	fs.readdir(this.watchDir, function(err,files) {
		if (err) {
			throw err;
		}
		for( var index in files) {
			watcher.emit('process', files[index])
		}
	});
}

Watcher.prototype.start = function(){
	var watcher = this;
	fs.watch(watchDir,function(action,file){
		if(action == 'change' || action == 'rename'){
			watcher.watch();
		}
	});
}


var watcher = new Watcher(watchDir,processedDir);

watcher.on('process',function process(file){
	var watchFile = this.watchDir + '/' + file;
	var processedFile = this.processedDir + '/' + file.toLowerCase();

	console.log(watchFile + ' -> ' + processedFile)
	fs.rename(watchFile,processedFile,function(err){
		if(err){
			throw err;
		}
	});
});


watcher.start();
