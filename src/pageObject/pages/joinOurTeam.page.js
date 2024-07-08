const BasePage = require('./base.page');

const { SearchFormCountries } = require('../components');

class JoinOurTeamPage extends BasePage {
  constructor() {
    super('/careers/job-listings');
    this.searchFormCountries = new SearchFormCountries();
  }

  get registerButton() {
    return $('.button__inner');
  }
}

module.exports = JoinOurTeamPage;
