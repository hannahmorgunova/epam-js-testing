const { When } = require('@wdio/cucumber-framework');
const { page } = require('../po');

When('I click Hamburger Menu button', async function () {
  await page('Main').hamburgerMenu.button.click();
});

When('I open item {string} and sub-item {string} in Hamburger menu', async function (itemName, subItemName) {
  await page('Main').hamburgerMenu.open(itemName, subItemName);
});
