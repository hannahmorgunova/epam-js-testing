const { sendRequest } = require('../../../src/helpers/api.helper');

describe('API tests DELETE method', () => {
  it('Should delete post', async () => {
    const response = await sendRequest('posts/2', 'delete');
    await expect(response.data).to.be.empty;
  });
});
