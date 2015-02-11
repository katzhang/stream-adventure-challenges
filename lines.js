var split = require('split');
var through = require('through');
var counter = 0;

var tr = through(function (line) {
	++counter;
	if (counter % 2 == 0) {
		this.queue(line.toString().toUpperCase() + '\n');
	} else {
		this.queue(line.toString().toLowerCase() + '\n');
	}
});

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);
