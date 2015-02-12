var http = require('http');
var through = require('through');

//Define tr outside of the server means all requests share the same queue -> test will fail
var tr = through(function (buf) {
    this.queue(buf.toString().toUpperCase());
});

var server = http.createServer(function(req, res) {
	if (req.method === 'POST') {
		req.pipe(through(function (buf) {
    		this.queue(buf.toString().toUpperCase());
		})).pipe(res);
	} else {
		res.end('send me a post\n');
	}
});

server.listen(process.argv[2]);