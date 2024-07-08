const BasePage = require('./base.page');

class ContactUsPage extends BasePage {
  constructor() {
    super('');
  }

  get submitButton() {
    return $('button[class="button-ui"]');
  }

  async input(field) {
    return $(`//em[contains(text(), "${field}")]/../../input`);
  }

  async getValidationMessage(field) {
    return $(`//em[contains(text(), "${field}")]/../span`);
  }
}

module.exports = ContactUsPage;
