const { Key, window } = require('webdriverio');

const { TopNavigation, HamburgerMenu, ThemeMode, CookiesBanner } = require('../components');

class BasePage {
  constructor(url) {
    this.url = url;
    this.topNavigation = new TopNavigation();
    this.hamburgerMenu = new HamburgerMenu();
    this.themeMode = new ThemeMode();
    this.cookiesBanner = new CookiesBanner();
  }

  open() {
    return browser.url(this.url);
  }

  // Perform ctrl+A
  async selectAll() {
    await browser.action('key')
      .down(Key.Ctrl).down('a')
      .perform();
  }

  // Perform ctrl+C
  async copy() {
    await browser.action('key')
      .down(Key.Ctrl).down('c')
      .perform();
  }

  // Perform ctrl+V
  async paste() {
    await browser.action('key')
      .down(Key.Ctrl).down('v')
      .perform();
  }

  // Sets key, value to Local Storage
  async setToLocalStorage(key, value) {
    await browser.execute((param, val) => {
      window.localStorage.setItem(param, val);
    }, key, value);
  }

  // Clicks on Accept All Cookies Button if Cookies banner is displayed
  async acceptCookies() {
    const cookiesBannerDisplayed = await this.cookiesBanner.rootEl.isDisplayed();
    if (cookiesBannerDisplayed === true) {
      await this.cookiesBanner.acceptAllButton.click();
      await this.hamburgerMenu.button.click();
    }
  }
}

module.exports = BasePage;
