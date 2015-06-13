/*!
 * iterator-async <https://github.com/doowb/iterator-async>
 *
 * Copyright (c) 2015, Brian Woodward.
 * Licensed under the MIT License.
 */

'use strict';

/**
 * Iterate over a stack of async functions passing the results of
 * each function to the next function in the stack.
 *
 * @param  {Array} `stack` Array of functions to call.
 * @return {Function} Returns a function that will iterator over the given stack of functions.
 * @api public
 * @name  iterator
 */

module.exports = function iteratorAync (stack) {
  return function (/* arguments */) {
    var self = this;
    var args = [].slice.call(arguments);
    var done = args.pop();
    var results = null;
    var len = stack.length, i = 0;
    args.unshift(null);
    if (!len) return done.apply(done, args);
    next.apply(next, args);

    function next (err/*, arguments */) {
      args = [].slice.call(arguments);
      err = args.shift();
      if (err) return done(err);
      if (i >= len) return done(null, args.shift());

      var fn = stack[i++];
      args.push(next);
      fn.apply(self, args);
    }
  };
};
