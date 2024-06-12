const BasePage = require('./base.page');

class RelocateWithEpamPage extends BasePage {
  constructor() {
    super('');
  }

  country(name) {
    return $(`//span[text()="${name.toUpperCase()}"]`);
  }
}

module.exports = RelocateWithEpamPage;
