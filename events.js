var events =require('events');
var util = require('util');

var person = function(name){
    this.name = name;
};

util.inherits(person,events.EventEmitter);

var james = new person('james');
var mary = new person('mary');
var sai = new person('sai');
var people =[james,mary,sai];

people.forEach(function(person){
    person.on('speak',function(msg){
     console.log(person.name + 'said:' + msg);
    });
});

james.emit('speak','hey dudes');
