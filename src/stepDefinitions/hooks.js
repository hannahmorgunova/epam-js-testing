const { Before } = require('@wdio/cucumber-framework');
const { page } = require('../pageObject');

Before({ name: 'opening' }, async function () {
  await page('Main').open();
  await console.log('before hook');
});
