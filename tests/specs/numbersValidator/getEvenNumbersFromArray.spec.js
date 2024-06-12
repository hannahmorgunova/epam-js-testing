const NumbersValidator = require('../../../src/app/numbersValidator');

describe('Tests for getEvenNumbersFromArray', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('Should return array of even numbers if array of numbers is provided', () => {
    expect(validator.getEvenNumbersFromArray([1, 10, 5, 2, 10])).to.eql([10, 2, 10]);
  });

  it('Should throw an error if array with not only numbers is provided', () => {
    expect(() => {
      validator.getEvenNumbersFromArray([2, '3', 8]);
    }).to.throw('[2,3,8] is not an array of "Numbers"');
  });

  it('Should throw an error if not array is provided', () => {
    expect(() => {
      validator.getEvenNumbersFromArray(4);
    }).to.throw('[4] is not an array of "Numbers"');
  });
});
