const { page } = require('../../../src/po');

describe('Test suite for WebdriverIO: Commands', () => {
  beforeEach(async () => {
    await page('Main').open();
  });

  it('Corresponding messages are displayed on attempt of invalid input', async () => {
    await page('Main').topNavigation.open('About', 'Investors');
    await page('Investors').inputEmail.scrollIntoView();
    await page('Investors').submitButton.click();
    await expect(page('Investors').errorMessage).toBeDisplayed();
    await expect(page('Investors').errorMessage).toHaveText(
      expect.stringContaining('The following errors must be corrected'),
    );
    await expect(page('Investors').validationMessage).toBeDisplayed();
    await expect(page('Investors').validationMessage).toHaveText('• Email is required');
    await page('Investors').inputEmail.setValue(Math.random().toString(36).slice(8));
    await page('Investors').submitButton.click();
    await expect(page('Investors').errorMessage).toBeDisplayed();
    await expect(page('Investors').validationMessage).toBeDisplayed();
    await expect(page('Investors').validationMessage).not.toHaveText('• Email is required');
    await expect(page('Investors').validationMessage).toHaveText('• Email is invalid');
  });

  it('List of Customer Solutions contains corresponding items', async () => {
    await page('Main').hamburgerMenu.button.click();
    await page('Main').hamburgerMenu.open('Industries', 'Consumer', 'Travel & Hospitality');
    await page('Travel And Hospitality').rolloverBlocks.scrollIntoView();
    const customerSolutionsNames = await page('Travel And Hospitality').customerSolutionsNames();
    await expect(customerSolutionsNames).toEqual(['Hotels.com', 'Aer Lingus', 'HERE Technologies', 'TUI Group']);
  });

  it('Page opened frome slide has corresponding title', async () => {
    await page('Main').hamburgerMenu.button.click();
    await page('Main').hamburgerMenu.open('Services', 'Strategy', 'Project to Product');
    await page('Project To Product').slider.scrollIntoView();
    await page('Project To Product').slideDisplayed(2);
    await page('Project To Product').slideLink.click();
    const pageTitle = await browser.getTitle();
    await expect(pageTitle).toEqual('Reimagining the Future of Travel to Singapore | EPAM');
  });

  it('Comparing list of items in drop-downs using copy/paste for search word', async () => {
    await page('Main').topNavigation.open('Careers', 'Hiring Locations');
    await page('Locations').searchFormCountries.rootEl.scrollIntoView();
    await page('Locations').searchFormCountries.selectField.click();
    await page('Locations').setinputFieldValue('Ukraine');
    await page('Locations').searchFormCountries.resultGroup.click();
    const listCitiesLocation = await page('Locations').searchFormCountries.citiesNames();
    await page('Locations').selectAll();
    await page('Locations').copy();
    await page('Join Our Team').open();
    await page('Join Our Team').searchFormCountries.rootEl.scrollIntoView();
    await page('Join Our Team').searchFormCountries.selectField.click();
    await page('Join Our Team').paste();
    await page('Join Our Team').searchFormCountries.resultGroup.click();
    const listCitiesJobListings = await page('Join Our Team').searchFormCountries.citiesNames();
    await expect(listCitiesLocation).toEqual(listCitiesJobListings);
  });

  it('Light theme is applied via local storage', async () => {
    await page('Main').setToLocalStorage('theme-mode', 'light-mode');
    await browser.refresh();
    await expect(page('Main').themeMode.mode('light')).toExist();
  });
});
