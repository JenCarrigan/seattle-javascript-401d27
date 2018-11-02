import { startDB, stopDB } from '../../../src/supergoose.js';
import atty from '../../../src/models/attorneys';

// Jest Hooks
beforeAll(startDB);
afterAll(stopDB);

afterEach(async () => {
  // clear collection for pristine testing conditions
  await atty.deleteMany({});
});

describe('Attorneys Model', () => {
  it('should create an atty', (done) => {
    const attyInfo = { name: 'Test' };
    const attorney = new atty(attyInfo);
    expect(attorney.name).toBe(attyInfo.name);
    done();
  });

  it('should create and save a note', (done) => {
    const attyInfo = { name: 'Test' };
    const attorney = new atty(attyInfo);
    attorney.save().then(newAtty => {
      expect(newAtty.id).toBeDefined();
      done();
    });
  });

  describe('Get All Attorneys', () => {
    it('should get zero attorneys when collection empty', (done) => {
      atty.find({}).then(attorneys => {
        expect(attorneys.length).toBe(0);
        done();
      });
    });

    it('should get 3 attorneys when collection full', async () => {
      try {
        await atty.create({ name: 'a' });
        await atty.create({ name: 'b' });
        await atty.create({ name: 'c' });
        const attys = await atty.find({});
        expect(attys.length).toBe(3);
      }
      catch (error) {
        expect(error).toBeFalsy();
      }
    });
  });
});