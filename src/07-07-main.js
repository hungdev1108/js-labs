// Write a function to transform a string:
// - The first letter in upper case
// - The rest in lower case
// Eg: capitalize('easy FRontend') ---> 'Easy frontend
// p1.toUpperCase()
// p2.toLowerCase()
// ==> p1 p2

function capitalize(str) {
  if (str === '') return '';

  const firstLetter = str.charAt(0).toUpperCase();
  const rest = str.slice(1).toLowerCase();

  return `${firstLetter}${rest}`;
}

console.log(capitalize(''));
console.log(capitalize('ABC'));
console.log(capitalize('easy FRoNteNd'));
