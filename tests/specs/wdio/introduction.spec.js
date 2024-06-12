const { page } = require('../../../src/po');

describe('Test suite for WebdriverIO: Introduction', () => {
  beforeEach(async () => {
    await page('Main').open();
  });

  it('Number of partners in Technology tab is 29', async () => {
    await page('Main').hamburgerMenu.button.click();
    await page('Main').hamburgerMenu.open('Services', 'Partners');
    await expect(page('Partners').partnersRolloverBlocks('Technology')).toBeElementsArrayOfSize(29);
  });

  it('Poland is displayed in list of countries', async () => {
    await page('Main').hamburgerMenu.button.click();
    await page('Main').acceptCookies();
    await page('Main').hamburgerMenu.open('Careers', 'Relocate with EPAM');
    await expect(page('Relocate With Epam').country('Poland')).toBeDisplayed();
  });

  it('History page contains corresponding link', async () => {
    await page('Main').hamburgerMenu.button.click();
    await page('Main').acceptCookies();
    await page('Main').hamburgerMenu.open('About', 'Who We Are', 'History');
    await expect(page('History').contactLink).toHaveHref('/about/who-we-are/contact');
  });

  it('Register button has corresponding text', async () => {
    await page('Main').topNavigation.open('Careers', 'Join our Team');
    await expect(page('Join Our Team').registerButton).toHaveText('REGISTER YOUR INTEREST');
  });
});
