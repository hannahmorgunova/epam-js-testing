const NumbersValidator = require('../../../src/app/numbersValidator');

describe('Tests for isInteger', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('Should return true if provided number is integer', () => {
    expect(validator.isInteger(5.0)).to.equal(true);
  });

  it('Should return false if provided number is not integer', () => {
    expect(validator.isInteger(0.2)).to.equal(false);
  });

  it('Should throw an error if not number is provided', () => {
    expect(() => {
      validator.isInteger('8');
    }).to.throw('[8] is not a number');
  });
});
