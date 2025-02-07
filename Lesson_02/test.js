// This example uses a function that includes a parameter
let word = 'hello';

function myFunc(param) {
  param = 'goodbye';
}

myFunc(word);
console.log(word);

// This example uses a function that does not include a parameter
let myVar = 1;

function yourFunc() {
  myVar = 2;
}

yourFunc();
console.log(myVar);