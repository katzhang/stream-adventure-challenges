var trumpet = require('trumpet');
var through = require('through');
var fs = require('fs');

var tr = trumpet();

var thru = through(function (buf) {
    this.queue(buf.toString().toUpperCase());
});

var loud = tr.select('.loud').createStream();

loud.pipe(thru).pipe(loud);

process.stdin.pipe(tr).pipe(process.stdout);
