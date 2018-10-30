'use strict'

const reader = require(`../../lab/lib/reader.js`);

let file3 = `${__dirname}/../data/eenie.txt`;
let file2 = `${__dirname}/../data/meenie.txt`;
let file1 = `${__dirname}/../data/moe.txt`;

// I can not get this test to work :(
describe('Reader module', () => {
    it('should get contents of a file', (done) => {
        const jobDone = (err, contents) => {
            expect(contents[2]).toBe('A little text');
            done();
        };
        reader([file1, file2,file3], jobDone);
    });
});