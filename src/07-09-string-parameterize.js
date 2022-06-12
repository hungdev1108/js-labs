// String exercise
// Write a JavaScript function to parameterize a string
// Eg: parameterize('Code JS Is Fun') -> 'code-js-is-fun'
// toLowerCase()
// p1: replaceAll()
// p2: split() and join()

function parameterize(str) {
  //   const lowerCaseStr = str.toLowerCase();
  //   return str.toLowerCase().replaceAll(' ', '-');
  // split and join
  return str.toLowerCase().split(' ').join('-');
}

console.log(parameterize('Code JS Is Fun'));
