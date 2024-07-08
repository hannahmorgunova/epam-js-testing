/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
const BaseComponent = require('./base.component');

class HamburgerMenu extends BaseComponent {
  constructor() {
    super('.hamburger-menu-ui');
  }

  get hamburgerMenuList() {
    return $('.hamburger-menu__list');
  }

  get button() {
    return $('.hamburger-menu__button');
  }

  get toggleButtonFirstLevel() {
    return '/../following-sibling::div[contains(@class, "toggle-button")]';
  }

  get toggleButton() {
    return '/../div[contains(@class, "toggle-button")]';
  }

  item(param) {
    return `//a[contains(@class, 'hamburger-menu__link') and contains(text(), "${param}")]`;
  }

  async open(...options) {
    await this.hamburgerMenuList.waitForStable();
    const firstOption = options.shift();
    const lastOption = options.pop();
    const toggleFirstLevel = await $(`${this.item(firstOption)}${this.toggleButtonFirstLevel}`);
    await toggleFirstLevel.click();
    for (const option of options) {
      const toggle = await $(`${this.item(option)}${this.toggleButton}`);
      await toggle.click();
    }
    await $(`${this.item(lastOption)}`).click();
  }
}

module.exports = HamburgerMenu;
