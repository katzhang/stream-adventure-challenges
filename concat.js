var concat = require('concat-stream');
var fs = require('fs');
process.stdin.pipe(concat(function(data) {
	data = data && data.toString().split('').reverse().join('');
	process.stdout.write(data);
}));