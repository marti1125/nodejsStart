var http = require('http');
http.createServer(function(req, res){
    res.writeHead(200, {'content-type':'text/plain'});
    res.end('Nodejs\n');
}).listen(3000, "127.0.0.1");
console.log('Server running at http://127.0.0.1:3000');

