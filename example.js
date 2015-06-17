var fs = require('fs');

var iterator = require('./');


var stack = [
  function read(fp, next) {
    return fs.readFile(fp, 'utf8', next);
  },
  function parse(str, next) {
    return next(null, JSON.parse(str));
  },
  function addStuff(obj, next) {
    obj.foo = 'bar';
    return next(null, obj);
  }
];


var readJSON = iterator(stack);
readJSON('./package.json', function (err, pkg) {
  if (err) console.error(err);
  console.log(pkg.name);
  //=> 'iterator-async'
  console.log(pkg.foo);
  //=> 'bar'
});
