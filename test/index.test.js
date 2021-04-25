const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('responds with json', async () => {
    await request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
  });
});