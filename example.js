var fs = require('fs');
var iterator = require('./');
var stack = [
  function (fp, next) { return fs.readFile(fp, 'utf8', next); },
  function (contents, next) { return next(null, JSON.parse(contents)); }
];
var readJSON = iterator(stack);
readJSON('./package.json', function (err, pkg) {
  if (err) console.error(err);
  console.log(pkg);
});
