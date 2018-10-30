import request from 'supertest';
const { app } = require('./app.js');

describe('App Tests', () => {
  it('should throw 404 for unregistered routes', (done) => {

    request(app)
      .post('/api/v1/attorneysxxxx')
      .then(response => {
        expect(response.status).toBe(404);
        done();
      });

  });
});