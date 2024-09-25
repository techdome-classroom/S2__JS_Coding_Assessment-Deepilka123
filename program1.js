function isValid(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        if (map[char]) {
            // If the character is an opening bracket, push it to the stack
            stack.push(char);
        } else {
            // If the character is a closing bracket
            if (stack.length === 0 || map[stack.pop()] !== char) {
                return false; // Return false if not valid
            }
        }
    }

    // If the stack is empty, all brackets were matched
    return stack.length === 0;
}

// Example Usage:
console.log(isValid("()")); // Output: true
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]")); // Output: false



