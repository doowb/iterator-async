'use strict';

var assert = require('assert');
var iterator = require('./');

describe('iterator-async', function () {
  it('should create an iterator function when given a stack', function () {
    var called = [];
    var stack = getStack(called);
    var fn = iterator(stack);
    assert.equal(typeof fn, 'function');
  });

  it('should iterate over a stack of functions', function (done) {
    var called = [];
    var stack = getStack(called);
    iterator(stack)('foo', 'bar', function (err, actual) {
      assert.deepEqual(actual, { foo: 'bar' });
      assert.deepEqual(called, ['a', 'b', 'c', 'd', 'e']);
      done();
    });
  });
});

function getStack (called) {
  var stack = [
    function a (key, value, next) {
      called.push('a');
      var obj = {};
      obj[key] = value;
      next(null, obj);
    },
    function b (obj, next) { called.push('b'); next(null, obj); },
    function c (obj, next) { called.push('c'); next(null, obj); },
    function d (obj, next) { called.push('d'); next(null, obj); },
    function e (obj, next) { called.push('e'); next(null, obj); }
  ];
  return stack;
}
