/**
 * 1. Ask the user for the first number
 * 2. Ask the user for the second number
 * 3. As the user for an operation to perform
 * 4. Perform the operation on the two numbers
 * 5. Print the result to the terminal
 */

const readline = require("readline-sync");

console.log('Welcome to Calculator!');

console.log('What\'s the first number?');
let number01 = readline.question();

console.log('What\'s the second number?');
let number02 = readline.question();

console.log('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

let output;
if (operation === '1') {
  output = Number(number01) + Number(number02);
} else if (operation === '2') {
  output = Number(number01) - Number(number02);
} else if (operation === '3') {
  output = Number(number01) * Number(number02);
} else if (operation === '4') {
  output = Number(number01) / Number(number02);
}

console.log(`The result is ${output}`);
