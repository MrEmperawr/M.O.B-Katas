/* eslint-disable no-undef */
const assert = require('assert');
const calculate = require('./roman-arabic').calculate;

describe.only('To check tests between arabic and roman', () => {

  it('Should return 3000 when passed MMM', () => {
    assert.equal(3000, calculate('MMM'));
  });

  it('Should return 500 when passed D', () => {
    assert.equal(500, calculate('D'));
  });

  it('Should return 50 when passed L', () => {
    assert.equal(50, calculate('L'));
  });

  it('Should return 13 when passed XIII', () => {
    assert.equal(13, calculate('XIII'));
  });

  it('Should return 7 when passed VII', () => {
    assert.equal(7, calculate('VII'));
  });

  it('Should return 9 when passed IX', () => {
    assert.equal(9, calculate('IX'));
  });

  it('Should return 149 when passed VII', () => {
    assert.equal(7, calculate('CXLIX'));
  });

  it('Should return 7 when passed VII', () => {
    assert.equal(7, calculate('VII'));
  });

});