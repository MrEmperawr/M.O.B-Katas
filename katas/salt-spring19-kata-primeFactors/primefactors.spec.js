const assert = require('assert');
const numbers = require('./primefactors').primeFactors;

describe('The prime factorizer', () => {

  it('should get 2 and 2 back', () => {
    assert.deepEqual([2, 2], numbers(4));
  });

  it('should get prime back', () => {
    assert.deepEqual(['37'], numbers(37));
  });

  it('should get 23 and 2 back', () => {
    assert.deepEqual([23, 2], numbers(46));
  });

  it('should get 5, 5, 5 and 3 back', () => {
    assert.deepEqual([5, 5, 5, 3], numbers(375));
  });

  it('should throw error if negative number', () => {
    assert.throws(() => numbers(-5), Error);
  });

  it('should throw error if input cannot be coerced into a number', () => {
    assert.throws(() => numbers('hej'), Error);
  });

  it('should throw error if input cannot be coerced into a number', () => {
    assert.throws(() => numbers('hej'), Error);
  });



});