
require('dotenv').config();
import request from 'supertest';
const { app } = require('./app.js');

describe('App Tests', () => {
  
  it('should create an album', (done) => {

    request(app)
      .post('/api/v1/albums')
      .send({foo:'boar'})
      .then(response => {
        expect(response.body).toEqual({nada:'nada'});
        done();
      });

  it('should throw 404 for unregistered routes', (done) => {
    request(app)
      .patch('/api/v1/attorneysxxxx')
      .then(response => {
        expect(response.status).toBe(404);
        done();
      });
  });

  it('should throw 404 for IDs not found', (done) => {
    request(app)
    .get('/api/v1/attorneys/1234')
    .then(response => {
      expect(response.status).toBe(404);
      done();
    });
  });

  it('should give a 200 if valid ID given', (done) => {
    request(app)
    .get('/api/v1/attorneys/4cde2f16-2d44-42ec-bdf3-1ea5127cf185')
    .then(response => {
      expect(response.status).toBe(200);
      done();
    });
  });

  it('should be 200 if the body is valid', (done) => {
    //let obj = {name: 'buddy'};
    // gahhh the above obj didn't work and the below isn't working for testing!!!! WHAT DOOO
    request(app)
    .post('/api/v1/attorneys/', 'name=amy')
    .then(response => {
      expect(response.status).toBe(200);
      done();
    });
  });

  it('should throw 400 if body is invalid', (done) => {
    request(app)
    .post('/api/v1/attorneys/')
    .then(response => {
      expect(response.status).toBe(400);
      done();
    });
  });
});