const arith = require('../../lib/arithmetic.js');

describe('Arithmetic test', () => {
    it('should return object with added and subtracted numbers', () => {
        expect(arith(1,2)).toStrictEqual({added: 3, subtracted: -1});
        expect(arith(10,20)).toStrictEqual({added: 30, subtracted: -10});
    });
    it('should return null if incorrect', () => {
        expect(arith('Mary', 32)).toStrictEqual({});
        expect(arith(true,'coooooo')).toStrictEqual({});
    });
});