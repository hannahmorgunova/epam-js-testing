const NumbersValidator = require('../../../src/app/numbersValidator');

describe('Tests for isAllNumbers', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('Should return true if array of numbers is provided', () => {
    expect(validator.isAllNumbers([2, 10, 5, 10])).to.eql(true);
  });

  it('Should return false if array of not only numbers is provided', () => {
    expect(validator.isAllNumbers([2, [10, 1], 5, 10])).to.eql(false);
  });

  it('Should throw an error if not array is provided', () => {
    expect(() => {
      validator.isAllNumbers('a');
    }).to.throw('[a] is not an array');
  });
});
