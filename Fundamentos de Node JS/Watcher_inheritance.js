var events = require('events');
var util = require('util');

function Watcher(watchDir, processedDir) {
	this.watchDir = watchDir;
	this.processedDir = processedDir;
}

util.inherits(Watcher,events.EventEmitter);
