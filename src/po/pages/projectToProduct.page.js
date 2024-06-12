const BasePage = require('./base.page');

class ProjectToProductsPage extends BasePage {
  constructor() {
    super('');
  }

  // Waits untill corresponsing slide is displayed
  /**
   * @param number { '1' | '2' | '3'}
   * @returns {*}
   */
  async slideDisplayed(number) {
    try {
      await browser.waitUntil(
        async () => await this.slide(number).getAttribute('aria-hidden') === 'false',
        { timeout: 15000, interval: 500 },
      );
    } catch (err) {
      await this.switchSlideButton.click();
      await this.slideLink.waitForStable();
    }
  }

  get slider() {
    return $('.slider');
  }

  slide(number) {
    const selectors = {
      1: '//span[contains(text(), "Partnering for Digital")]/ancestor::div[@class="owl-item" or @class="owl-item active"]',
      2: '//span[contains(text(), "Singapore with Connect@Changi")]/ancestor::div[@class="owl-item" or @class="owl-item active"]',
      3: '//span[contains(text(), "Making Digital Payments Interactive")]/ancestor::div[@class="owl-item" or @class="owl-item active"]',
    };
    return $(selectors[number]);
  }

  get slideLink() {
    return $("//div[@aria-hidden='false']//a[contains(text(), 'Read More')]");
  }

  get switchSlideButton() {
    return $('.slider__right-arrow');
  }
}

module.exports = ProjectToProductsPage;

