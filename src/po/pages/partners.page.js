const BasePage = require('./base.page');

class PartnersPage extends BasePage {
  constructor() {
    super('');
  }

  partnersRolloverBlocks(tabName) {
    const selectors = {
      digital: 'div[data-item="0"]',
      technology: 'div[data-item="1"]',
      all: 'div[data-item="2"]',
    };
    return $(selectors[tabName.toLowerCase()]).$$('.rollover-blocks__content');
  }
}

module.exports = PartnersPage;
