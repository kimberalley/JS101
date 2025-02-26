/**
 * *PSEUDOCODE
 * PRE-EXECUTION
 * Require readline-sync
 * Create prompt function for message formatting
 * Create invalid function for invalid entries
 * Create a sum function that returns the sum of all values
 * Create a product function that returns the factorial of the integer
 * EXECUTION
 * Welcome message
 * Message 1 = Please enter an integer greater than 0
 * Save response to variable
 * While loop that traps user until valid response
 * Message 2 = Enter S for sum or P for product
 * Save response to variable
 * If statement that defines action if entered S
 * Else if statement that defines action if entered P
 * Save result to variable
 * Message stating result
 */

//* PRE-EXECUTION
const READLINE = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalid(response) {
  return response.trimStart() === '' || Number.isNaN(Number(response));
}

const sum = int => {
  let sumTotal = 0;
  for (let num = 1; num <= int; num += 1) {
    sumTotal += num;
  }
  return sumTotal;
}

const product = int => {
  let productTotal = 1;
  for (let num = 1; num <= int; num += 1) {
    productTotal *= num;
  }
  return productTotal;
}

//* EXECUTION
prompt('Welcome to Sum or Product Calculator!');

prompt('Please enter an integer greater than 0 and less than 20:');
let integer = READLINE.question();

while (invalid(integer)) {
  console.log('Invalid entry.  Please try again.');
  integer = READLINE.question();
}

prompt('Enter "s" to compute the sum of all integers from 0 to the entered value or "p" to computer the product:');
let sumOrProduct = READLINE.question();

while (sumOrProduct.trimStart() === '' || (sumOrProduct.toLowerCase() !== 'p' && sumOrProduct.toLowerCase() !== 's')) {
  console.log('Invalid entry.  Please try again.');
  sumOrProduct = READLINE.question();
}

if (sumOrProduct === 's') {
  let sumResult = (sum(integer));
  console.log(`The sum is ${sumResult}.`);
} else if (sumOrProduct === 'p') {
  let productResult = (product(integer));
  console.log(`The product is ${productResult}.`);
}