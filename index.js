/*!
 * iterator-async <https://github.com/doowb/iterator-async>
 *
 * Copyright (c) 2015, Brian Woodward.
 * Licensed under the MIT License.
 */

'use strict';

var async = require('async');

/**
 * Iterate over a stack of async functions passing the results of
 * each function to the next function in the stack.
 *
 * @param  {Array} `stack` Array of functions to call.
 * @return {Function} Returns a function that will iterator over the given stack of functions.
 * @api public
 */

function iteratorAsync(stack) {
  stack = stack || [];

  return function () {
    var args = [].slice.call(arguments);
    var cb = args.pop(), i = -1;

    async.reduce(stack, args, function (acc, fn, next) {
      if (++i === 0) {
        fn.apply(this, acc.concat(next));
      } else {
        fn.call(this, acc, next);
      }
    }.bind(this), cb);
  };
}

/**
 * Expose `iteratorAsync`
 */
module.exports = iteratorAsync;
