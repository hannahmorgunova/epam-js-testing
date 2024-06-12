const { page } = require('../po');

function messageType(type, field) {
  switch (type) {
    case 'Validation':
      return page('Contact Us').getValidationMessage(field);
    default:
      throw Error(`${type} is not a valid message type`);
  }
}

module.exports = messageType;
