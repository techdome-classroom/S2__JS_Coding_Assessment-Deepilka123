function romanToInt(s) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    let prevValue = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const currentValue = romanMap[s[i]];
        
        if (currentValue < prevValue) {
            total -= currentValue; // Subtract if the current value is less than the previous
        } else {
            total += currentValue; // Add otherwise
        }
        
        prevValue = currentValue; // Update previous value
    }

    return total;
}
module.exports = romanToInt; // Yeh line add karein


// Example usage:
console.log(romanToInt("III"));     
console.log(romanToInt("LVIII"));   
console.log(romanToInt("MCMXCIV")); 
