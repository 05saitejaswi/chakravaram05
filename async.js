var fs = require('fs');

fs.readFile('readMe.txt','utf8',function(err,data){
    console.log(data);
});

//output: hello ninja

var fs = require('fs');

fs.readFile('readMe.txt','utf8',function(err,data){
    console.log(data);
});

console.log('test');

//output:test  hello ninja

var fs = require('fs');

fs.readFile('readMe.txt','utf8',function(err,data){
  fs.writeFile('writeMe.txt',data);  
});
