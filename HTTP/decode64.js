var auth = new Buffer(authHeader.split(' ')[1],'base64').toString().split(':');
var user = auth[0];
var pass = auth[1];
