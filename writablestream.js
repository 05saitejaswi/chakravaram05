var http = require('http');
var fs = require('fs');


var myReadstream = fs.createReadStream(__dirname + '/readMe.txt','utf8');
var myWritestream = fs.createWriteStream(__dirname +'/writeme.txt');

myReadstream.on('data',function(chunk){
    console.log('new chunk received:');
    myWritestream.write(chunk);
});
