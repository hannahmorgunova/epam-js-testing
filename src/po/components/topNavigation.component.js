/* eslint-disable no-restricted-syntax */
const BaseComponent = require('./base.component');

class TopNavigation extends BaseComponent {
  constructor() {
    super('.top-navigation__row');
  }

  item(param) {
    return `//a[contains(text(), '${param}') and contains(@class, 'navigation')]`;
  }

  async open(...options) {
    const firstOption = options.shift();
    await $(`${this.item(firstOption)}`).moveTo();
    await $(`${this.item(options[0])}`).click();
  }
}

module.exports = TopNavigation;
