/** PSEUDOCODE
 * Load readline-sync
 * Create prompt format function
 * Create invalid function for invalid entries
 * Create a function that produces the area of the room in square meters and square feet
 * Ask for length of room in meters
 * While loop that traps user until valid response
 * Ask for width of room in meters
 * While loop that traps user until valid response
 * Log the area of the room in square meters and square feet
 * Ask if they want to measure another room
 */

const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}.`);
}

function invalid(entry) {
  return entry.trimStart() === '' || Number.isNaN(Number(entry));
}

function areaInFeet(l, w) {
  return ((l * w) * 10.7639);
}

prompt('What is the length of the room in meters?');
let length = readline.question();

while (invalid(length)) {
  prompt('Invalid entry.  Try again.')
}

prompt('What is the width of the room in meters?');
let width = readline.question();

while (invalid(width)) {
  prompt('Invalid entry.  Try again.');
}

console.log(`The area of the room is ${(length * width).toFixed(2)} square meters
  (${areaInFeet(length, width).toFixed(2)} square feet).`);