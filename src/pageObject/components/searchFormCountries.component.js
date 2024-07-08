const BaseComponent = require('./base.component');

class SearchFormCountries extends BaseComponent {
  constructor() {
    super('#jobSearchFilterForm');
  }

  get selectField() {
    return $('.select2-selection');
  }

  get inputField() {
    return $('//input[@class="select2-search__field"]');
  }

  get resultGroup() {
    return $('.select2-results__group');
  }

  get resultGroupList() {
    return $('.select2-results__options--nested');
  }

  get resultGroupListCities() {
    return this.resultGroupList.$$('.select2-results__option');
  }

  // Returns array of cities
  async citiesNames() {
    const citiesArray = await this.resultGroupListCities;
    const listCities = await browser.execute(function (array) {
      return array.map((el) => el.innerText);
    }, citiesArray);
    return listCities;
  }
}

module.exports = SearchFormCountries;
