var http = require('http');
var fs = require('fs');


var myReadstream = fs.createReadStream(__dirname + '/readMe.txt','utf8');

myReadstream.on('data',function(chunk){
    console.log('new chunk received:');
    console.log(chunk);
});
