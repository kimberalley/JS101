//* PSEUDOCODE
/**
 * Create array with three elements: first, middle, and last names
 * Create an object with two keys: 1) "title" & 2) "occupation"
 */

let name = ['Richard', 'Byung', 'Yoo'];

let address = {
  title: 'awesome',
  occupation: 'Project Manager'
}

console.log(`Hello, ${name.join(' ')}. Nice to have an ${address.title} ${address.occupation} around!`);