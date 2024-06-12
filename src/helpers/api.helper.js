// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
const axios = require('axios');

const sendRequest = async function (url, method = 'get', headers = null, data = null) {
  const response = await axios({
    url: `https://jsonplaceholder.typicode.com/${url}`,
    method,
    headers,
    data,
    validateStatus: () => true,
  });
  return {
    status: response.status,
    data: response.data,
  };
};

module.exports = {
  sendRequest,
};
