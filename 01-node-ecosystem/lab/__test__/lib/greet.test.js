const greet = require('../../lib/greet.js');

describe('Greet test', () => {
    it('should return null if not a string', () => {
        expect(greet(42)).toStrictEqual(null);
    });
    it('should return hello name if string', () => {
        expect(greet('world')).toStrictEqual("Hello world");
    });
});