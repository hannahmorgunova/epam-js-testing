const BasePage = require('./base.page');

class TravelAndHospitalityPage extends BasePage {
  constructor() {
    super('');
  }

  get rolloverBlocks() {
    return $('.rollover-blocks');
  }

  get rolloverBlocksContent() {
    return $$('.rollover-blocks__content');
  }

  // Returns array of Customers Solutions names
  async customerSolutionsNames() {
    const customerSolutionsArray = await this.rolloverBlocksContent;
    const customerSolutionNames = await browser.execute(function (array) {
      return array.map((el) => el.getAttribute('aria-label').trim());
    }, customerSolutionsArray);
    return customerSolutionNames;
  }
}

module.exports = TravelAndHospitalityPage;
