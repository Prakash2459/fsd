// Import prompt-sync
const prompt = require('prompt-sync')();

// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Take input from the user
const input = prompt('Please enter a string to reverse: ');

// Reverse the string and print the result
const reversedString = reverseString(input);
console.log('Reversed String:', reversedString);
