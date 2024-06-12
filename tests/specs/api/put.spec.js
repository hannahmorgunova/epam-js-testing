const { sendRequest } = require('../../../src/helpers/api.helper');
const putData = require('../../../src/config/apiData/putData.json');
const headersData = require('../../../src/config/apiData/headersData.json');

describe('API tests PUT method', () => {
  it("Should update user's data", async () => {
    const response = await sendRequest('users/2', 'put', headersData, putData);
    await expect(response.data).to.not.have.any.keys('email', 'phone', 'website', 'company');
    await expect(response.data).to.not.have.nested.property('address.street');
    await expect(response.data).to.not.have.nested.property('address.suite');
    await expect(response.data).to.not.have.nested.property('address.zipcode');
    await expect(response.data).to.not.have.nested.property('address.geo.lng');
  });

  it('Should return error code 500 on attempt to update non-existent user', async () => {
    const response = await sendRequest('users/101', 'put', headersData, putData);
    await expect(response.status).to.equal(500);
  });
});
