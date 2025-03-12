let string = 'The cow jumped over the burning sun!';

function penultimate(msg) {
  let array = msg.split(' ');
  console.log(array[array.length - 2]);
}

penultimate(string);