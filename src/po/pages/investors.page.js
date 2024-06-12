const BasePage = require('./base.page');

class InvestorsPage extends BasePage {
  constructor() {
    super('');
  }

  get inputEmail() {
    return $('input[placeholder="Enter your Email Address"]');
  }

  get submitButton() {
    return $('button[class$="submit-button--fancy"]');
  }

  get errorMessage() {
    return $('.module_message--error');
  }

  get validationMessage() {
    return $('.module_message--validation_error');
  }
}

module.exports = InvestorsPage;

