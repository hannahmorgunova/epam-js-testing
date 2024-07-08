const { When } = require('@wdio/cucumber-framework');
const { page } = require('../po');

When('I open {string} item and {string} sub-item in Top Navigation bar', async function (itemName, subItemName) {
  await page('Main').topNavigation.open(itemName, subItemName);
});

When('I scroll to Submit button', async function () {
  await page('Contact Us').submitButton.scrollIntoView();
});

When('I click Submit button', async function () {
  await page('Contact Us').submitButton.click();
});

When('I set random value in {string} input field', async function (field) {
  const inputField = await page('Contact Us').input(field);
  await inputField.setValue(Math.random().toString(36).slice(8));
});
