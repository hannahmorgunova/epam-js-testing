const { Then } = require('@wdio/cucumber-framework');
const { page } = require('../po');

Then('Number of blocks in {string} tab should be equal to {int}', async function (tab, number) {
  await expect(page('Partners').partnersRolloverBlocks(tab)).toBeElementsArrayOfSize(number);
});

