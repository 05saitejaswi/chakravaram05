var http = require('http');
var fs = require('fs');


var server = http.createServer(function(req,res){
    console.log('request was made:' +req.url);
   res.writeHead(200, {'content-Type':'text/plain'});
   var myReadstream = fs.createReadStream(__dirname + '/readMe.txt','utf8');
   //var myWritestream = fs.createWriteStream(__dirname +'/writeme.txt');
   myReadstream.pipe(res);

});


server.listen(3000,'127.0.0.1');
console.log('yo dawgs,now lising to 3000');


//run this in cmd then open the browser  then type 127.0.0.1:3000
