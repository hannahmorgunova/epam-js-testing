const BasePage = require('./base.page');

const { SearchFormCountries } = require('../components');

class LocationsPage extends BasePage {
  constructor() {
    super('');
    this.searchFormCountries = new SearchFormCountries();
  }

  // Sets value in the input field
  async setinputFieldValue(countryName) {
    await this.searchFormCountries.inputField.setValue(countryName);
  }
}

module.exports = LocationsPage;
