var http = require('http');

var server = http.createServer(function(req,res){
   res.writeHead(200, {'content-Type':'text/plain'});
   res.end('hey ninjas');
});

server.listen(3000,'127.0.0.1');
console.log('yo dawgs,now lising to 3000');
