var fs = require('fs')

var readMe = fs.readFileSync('readMe.txt','utf8');
console.log(readMe);

// create one more file name it as readMe.txt and write some thing in that.
