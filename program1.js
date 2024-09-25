function isValid(s) {
    const stack = [];
    const mapping = {
        ')': '(',
        '}': '{',
        ']': '[',
    };

    for (let char of s) {
        // Agar char closing bracket hai
        if (char in mapping) {
            // Pop the topmost element from the stack if it's not empty, else assign a dummy value
            const topElement = stack.length === 0 ? '#' : stack.pop();
            // Check if the popped element matches the mapping
            if (mapping[char] !== topElement) {
                return false;
            }
        } else {
            // It's an opening bracket, push onto stack
            stack.push(char);
        }
    }
    // Return true if no unmatched opening brackets remain
    return stack.length === 0;
}

// Exporting the function
module.exports = isValid;



