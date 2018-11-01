'use strict';

import request from 'supertest';

// with supertest, no longer need http://localhost:3000
const url = '/api/v1/attorneys';
const { app } = require('../../../src/app.js');

// Added a clear method in memory.js so the database can be reassigned to an empty object
import storage from '../../../src/lib/storage/filesystem.js'

// pass my server to the request method of supertest
let testRequest = request(app);

describe('Testing the routes', () => {
  const sample = { name: 'Test Atty', numOfClients: 1, startDate: '1/1/11' };
  const changed = { name: 'Changed Atty', numOfClients: 2};

  describe('Testing the POST route', () => {
    it('should POST a new attorney', (done) => {
      testRequest
        .post(url)
        .send(sample)
        .then(response => {
          expect(response.body.name).toEqual(sample.name);
          expect(response.body.numOfClients).toEqual(sample.numOfClients);
          expect(response.status).toBe(200);
          done();
        });
    });
    
    //really if user puts nothing in there should be an error but am unsure as of yet how to make a body property required
    it('should go with defaults if nothing passed in', (done) => {
      testRequest
        .post(url)
        .send()
        .then(response => {
          expect(response.body.name).toEqual('');
          expect(response.body.numOfClients).toEqual('');
          expect(response.status).toBe(200);
          done();
        });
    });
  });

  describe('Testing the GET route', () => {
    it('should GET all attorneys', (done) => {
      testRequest
        .get(`${url}`)
        .then(response => {
          expect(response.status).toBe(200);
          done();
        });
    });

    it('should GET one attorney', (done) => {
      testRequest
        .post(url)
        .send(sample)
        .then(response => {
          testRequest
            .get(`${url}/${response.body.id}`)
            .then(response => {
              expect(response.body.title).toEqual(sample.title);
              expect(response.body.content).toEqual(sample.content);
              expect(response.status).toBe(200);
              done();
            });
        });
    });

    it('should throw 404 for wrong ID', (done) => {
      testRequest
      .post(url)
      .send(sample)
      .then(response => {
        testRequest
          .get(`${url}/1234`)
          .then(response => {
            expect(response.status).toBe(404);
            done();
          });
      });
    });
  });

  describe('Testing the PUT route', () => {
    it('should change the content', () => {
      testRequest
      .post(url)
      .send(sample)
      .then(response => {
        let id = response.body.id;
        testRequest
          .put(`${url}/${id}`)
          .send(changed)
          .then(response => {
            testRequest
              .get(`${url}/${id}`)
              .then(response => {
                expect(response.body.name).toEqual(changed.name);
                expect(response.status).toBe(200);
                done();
              });
          });
      });
    });

    it('should throw 404 for wrong ID', (done) => {
      testRequest
      .put(`${url}/1234`)
      .send(sample)
      .then(response => {
        expect(response.status).toBe(404);
        done();
      });
    });
  });
});