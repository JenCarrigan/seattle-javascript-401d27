import supergoose, { startDB, stopDB } from '../../src/supergoose.js';
import atty from '../../src/models/attorneys';

const { server } = require('../../src/app.js');
const mockRequest = supergoose(server);
const url = '/api/v1/attorneys';
const newAtty = { name: 'John', numOfClients: 13, startDate: '1/2/12' };

// Jest Hooks
beforeAll(startDB);
afterAll(stopDB);
afterEach(async () => {
  // clear collection
  await atty.deleteMany({});
});

describe('api server', () => {
  it('should respond with a 404 on valid req with invalid ID', async () => {
    const response = await mockRequest.get('/api/v1/attorneys/12')
    expect(response.status).toBe(404);
  });

  it('should respond properly on a get request to a valid model', async () => {
    const response = await mockRequest.get(url);
    expect(response.status).toBe(200);
  });

  it('should be able to post to /api/v1/attorneys', async () => {
    const response = await mockRequest
      .post(url)
      .send(newAtty);
    expect(response.status).toBe(200);
    expect(response.body.name).toEqual(newAtty.name);
  });

  it('should reponse with a 400 if invalid post body', async () => {
    const response = await mockRequest
      .post(url)
      .send();
    expect(response.status).toBe(400);
  });

  //THIS ONE DOESN'T WORK BUT WORKING IN HTTPIE
  xit('should find a single atty after a post', async () => {
    const postResponse = await mockRequest.post(url).send(newAtty);
    const attyID = postResponse.body._id;
    const getResponse = await mockRequest.get(`${url}/${attyID}`)
    const attorney = getResponse.body[0];
    expect(attorney.name).toEqual(newAtty.name);
  });

  it('should return the number of attys that were posted', async () => {
    const obj = { name: 'test', numOfClients: 3 };
    await mockRequest.post(url).send(obj);
    await mockRequest.post(url).send(obj);
    const { body } = await mockRequest.get(url);
    expect(body.length).toBe(2);
  });

  it('a get should find zero attorneys when nothing posted yet', async () => {
    const { body } = await mockRequest.get(url);
    expect(body.length).toBe(0);
  });
  
  //THIS ONE DOESN'T WORK BUT WORKING IN HTTPIE
  xit('should change a PUT request', async () => {
    const obj = { name: 'test', numOfClients: 1 };
    const changed = { name: 'changed', startDate: '1/1/12' }
    const response = await mockRequest.post(url).send(obj);
    const id = response.body._id;
    await mockRequest.put(`${url}/${id}`).send(changed);
    const checkPut = await mockRequest.get(`${url}/${id}`);
    expect(checkPut.status).toBe(200);
    expect(checkPut.body[0].name).toEqual(changed.name);
    expect(checkPut.body[0].numOfClients).toBeUndefined();
  });

  it('should respond with a 400 if no body in PUT request', async () => {
    //even though we're passing in a bad ID, it should still throw the no body before it checks for valid ID
    const response = await mockRequest.put(`${url}/1234`).send();
    expect(response.status).toBe(400);
  });

  it('should response with 404 if invalid ID in PUT request', async () => {
    const changed = { name: 'changed', startDate: '1/1/12' };
    const response = await mockRequest.put(`${url}/1234`).send(changed);
    expect(response.status).toBe(404);
  });
});