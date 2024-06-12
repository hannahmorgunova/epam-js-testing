/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-await-in-loop */
const { sendRequest } = require('../../../src/helpers/api.helper');

describe('API tests GET method', () => {
  it('Should verify that number of posts is 100', async () => {
    const posts = await sendRequest('posts');
    await expect(posts.data).to.have.lengthOf(100);
  });

  it('Should verify id and userId for each post', async () => {
    const posts = await sendRequest('posts');
    const idArray = (posts.data).map((el) => el.id);
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < idArray.length; i++) {
      const post = await sendRequest(`posts/${idArray[i]}`);
      await expect(post.data.id).to.equal(idArray[i]) && expect(post.data.userId).to.equal(Math.ceil(idArray[i] / 10));
    }
  });

  it('Should verify title of corresponding post', async () => {
    const post = await sendRequest('posts?userId=6&id=57');
    await expect(post.data[0].title).to.equal('sed ab est est');
  });

  it('Should return error code 404 on attempt to get non-existent post', async () => {
    const post = await sendRequest('posts/102');
    await expect(post.status).to.equal(404);
  });
});
