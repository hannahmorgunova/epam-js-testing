const { sendRequest } = require('../../../src/helpers/api.helper');
const postData = require('../../../src/config/apiData/postData.json');
const headersData = require('../../../src/config/apiData/headersData.json');

describe('API tests POST method', () => {
  it('Should add new post', async () => {
    const response = await sendRequest('posts', 'post', headersData, postData);
    await expect(response.status).to.equal(201);
    await expect(response.data.id).to.equal(101);
  });
});
