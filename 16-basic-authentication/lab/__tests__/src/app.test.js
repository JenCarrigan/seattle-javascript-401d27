import supergoose, { startDB, stopDB } from '../../supergoose.js';
import { app } from '../../src/app.js';

const mockRequest = supergoose(app);

beforeAll(startDB);
afterAll(stopDB);
beforeEach(async () => {
  //await User.deleteMany({});
});

describe('app', () => {

  it('should sign up with good creds', async () => {
    const userInfo = {username:'foo',email:'foo@bar.com',password:'foobar'};
    const response = await mockRequest.post('/api/signup').send(userInfo);
    expect(response.text.split('.').length).toBe(3);
  });

  it('should sign fail with bad creds', async () => {
    const userInfo = {username:'foo',email:'foo@bar.com'};
    const response = await mockRequest.post('/api/signup').send(userInfo);
    expect(response.status).toBe(400);
  });

  it('should respond 401 with invalid pw or username', async () => {
    const userInfo = {username:'foo',email:'foo@bar.com',password:'foobar'};
    await mockRequest.post('/api/signup').send(userInfo);
    const response = await mockRequest.get('/api/signin').auth('jen', 'hello');
    expect(response.status).toBe(401);
  });

  it('should respond 200 with valid requests', async () => {
    const userInfo = {username:'foo',email:'foo@bar.com',password:'foobar'};
    await mockRequest.post('/api/signup').send(userInfo);
    const response = await mockRequest.get('/api/signin').auth('foo', 'foobar');
    expect(response.status).toBe(200);
  });

  it('should respond 404 for unregistered routes', async () => {
    const userInfo = {username:'foo',email:'foo@bar.com',password:'foobar'};
    const response = await mockRequest.post('/api/hello').send(userInfo);
    expect(response.status).toBe(404);
  });
});