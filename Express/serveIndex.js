var express = require('express');
var serveStatic = require('serve-static');
var serveIndex = require('serve-index');

var app = express()
			.use(serveStatic(__dirname+'/serve-index'))
			.use(serveIndex(__dirname+'/serve-index'))
			.listen(3000);
