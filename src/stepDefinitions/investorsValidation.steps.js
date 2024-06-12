const { Then } = require('@wdio/cucumber-framework');
const messageType = require('./messageType');

Then(/^"(.*)" message for "(.*)" field should( not)? be displayed$/, async function (type, field, notParam) {
  let assert = expect(messageType(type, field));
  if (notParam) {
    assert = assert.not;
  }
  await assert.toBeDisplayed();
});

Then(/^"(.*)" message for "(.*)" field should( not)? have "(.*)" text$/, async function (type, field, notParam, message) {
  let assert = expect(messageType(type, field));
  if (notParam) {
    assert = assert.not;
  }
  await assert.toHaveText(message);
});
