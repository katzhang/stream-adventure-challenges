var ws = require('websocket-stream');
var stream = ws('ws://localhost:8000');

var string = "hello\n";

stream.end(string);