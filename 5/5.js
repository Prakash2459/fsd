// Import prompt-sync to take user input
const prompt = require('prompt-sync')();

// Function to check if a number is prime
function isPrime(num) {
    // Numbers less than 2 are not prime
    if (num <= 1) return false;

    // Check divisibility from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;  // Number is divisible, so it's not prime
        }
    }
    return true;  // Number is prime
}

// Take input from the user
const input = parseInt(prompt('Enter a number: '));

// Validate if input is a number
if (isNaN(input)) {
    console.log('Please enter a valid number.');
} else {
    // Check if the number is prime
    if (isPrime(input)) {
        console.log(`${input} is a prime number.`);
    } else {
        console.log(`${input} is not a prime number.`);
    }
}
