/*!
 * iterator-async <https://github.com/doowb/iterator-async>
 *
 * Copyright (c) 2015, Brian Woodward.
 * Licensed under the MIT License.
 */

'use strict';

var lazy = require('lazy-cache')(require);
var async = lazy('async');

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
  return async().seq.apply(async(), stack);
};
