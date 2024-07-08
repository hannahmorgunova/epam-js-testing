const NumbersValidator = require('../../../src/app/numbersValidator');

describe('Tests for isNumberEven', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('Should return true if even number is provided', () => {
    expect(validator.isNumberEven(4)).to.equal(true);
  });

  it('Should return false if odd number is provided', () => {
    expect(validator.isNumberEven(5)).to.equal(false);
  });

  it('Should throw an error if not number is provided', () => {
    expect(() => {
      validator.isNumberEven('7');
    }).to.throw('[7] is not of type "Number" it is of type "string"');
  });
});
