const assert = require('assert');
const isValid = require('./program1.js');

describe('test cases for problem 1', function() {
    it('test case 1', function() {
        assert.strictEqual(isValid("()"), true);
    });

    it('test case 2', function() {
        assert.strictEqual(isValid("()[]{}"), true);
    });

    it('test case 3', function() {
        assert.strictEqual(isValid("(]"), false);
    });

    it('test case 4', function() {
        assert.strictEqual(isValid("([)]"), false);
    });

    it('test case 5', function() {
        assert.strictEqual(isValid("{[]}"), true);
    });

    it('test case 6', function() {
        assert.strictEqual(isValid(""), true); 
    });

    it('test case 7', function() {
        assert.strictEqual(isValid("{[()]()}"), true); 
    });
});



