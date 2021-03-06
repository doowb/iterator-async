# iterator-async [![NPM version](https://badge.fury.io/js/iterator-async.svg)](http://badge.fury.io/js/iterator-async)  [![Build Status](https://travis-ci.org/doowb/iterator-async.svg)](https://travis-ci.org/doowb/iterator-async)

> Iterate over a stack of async functions.

This module is intended to be used with [loader-cache](https://github.com/jonschlinkert/loader-cache)but may be used by itself or in other modules.

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i iterator-async --save
```

## Usage

```js
var iterator = require('iterator-async');
```

## API

<!-- add a path or glob pattern for files with code comments to use for docs  -->

### [iterator](index.js#L20)

Iterate over a stack of async functions passing the results of
each function to the next function in the stack.

**Params**

* `stack` **{Array}**: Array of functions to call.
* `returns` **{Function}**: Returns a function that will iterator over the given stack of functions.

```js
var fs = require('fs');
var iterator = require('iterator-async');
var stack = [
  function (fp, next) { return fs.readFile(fp, 'utf8', next); },
  function (contents, next) { return next(null, JSON.parse(contents)); }
];
var readJSON = iterator(stack);
readJSON('./package.json', function (err, pkg) {
  if (err) console.error(err);
  console.log(pkg);
});
```

## Related projects

<!-- add an array of related projects, then un-escape the helper -->

* [async](https://github.com/caolan/async#readme): Higher-order functions and common patterns for asynchronous code
* [iterator-promise](https://github.com/doowb/iterator-promise): Iterator over a stack of functions.
* [iterator-streams](https://github.com/doowb/iterator-streams): Iterator over a stack of functions.
* [iterator-sync](https://github.com/doowb/iterator-sync): Iterator over a stack of functions.
* [loader-cache](https://github.com/jonschlinkert/loader-cache): Register loader functions that dynamically read, parse or otherwise transform file contents when the name… [more](https://github.com/jonschlinkert/loader-cache)

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/doowb/iterator-async/issues/new)

## Author

**Brian Woodward**

+ [github/doowb](https://github.com/doowb)
+ [twitter/doowb](http://twitter.com/doowb)

## License

Copyright © 2015 [Brian Woodward](https://github.com/doowb)
Released under the MIT license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on June 17, 2015._