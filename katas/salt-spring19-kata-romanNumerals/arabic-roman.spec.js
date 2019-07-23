/* eslint-disable no-undef */
const assert = require('assert');
const refineRomanNum = require('./arabic-roman').refineRomanNum;

describe('To check tests between arabic and roman', () => {

  it('Should return I when passed 1', () => {
    assert.equal('I', refineRomanNum(1));
  });

  it('Should return CXXIII when passed 123', () => {
    assert.equal('CXXIII', refineRomanNum(123));
  });

  it('Should return IX when passed 9', () => {
    assert.equal('IX', refineRomanNum(9));
  });

  it('Should return MXLIV when passed 1044', () => {
    assert.equal('MXLIV', refineRomanNum(1044));
  });
});