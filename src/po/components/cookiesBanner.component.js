const BaseComponent = require('./base.component');

class CookiesBanner extends BaseComponent {
  constructor() {
    super('div[id="onetrust-banner-sdk"]');
  }

  get acceptAllButton() {
    return this.rootEl.$('button[id="onetrust-accept-btn-handler"]');
  }
}

module.exports = CookiesBanner;
