// test2.js

const romanToInt = require('./program2'); // Correct path to your program file

describe('test cases for problem 2', function() {
    it('test case 1', function() {
        const result = romanToInt("III");
        if (result !== 3) throw new Error('Test case 1 failed');
    });

    it('test case 2', function() {
        const result = romanToInt("LVIII");
        if (result !== 58) throw new Error('Test case 2 failed');
    });

    it('test case 3', function() {
        const result = romanToInt("MCMXCIV");
        if (result !== 1994) throw new Error('Test case 3 failed');
    });

    // Add more test cases as needed
});


