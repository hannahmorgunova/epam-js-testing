const BasePage = require('./base.page');

class HistoryPage extends BasePage {
  constructor() {
    super('');
  }

  get contactLink() {
    return $('//a[contains(@class, "bold-underlined-hover") and contains(text(), "Contact Us")]');
  }
}

module.exports = HistoryPage;
