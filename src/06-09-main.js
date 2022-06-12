// 1. Write a function to check if a number is odd/even
function isEven(num) {
  return num % 2 === 0;
}

function isOdd(num) {
  return num % 2 !== 0;
}
// 2. Write a function to check a number is divisible by 5
function isDivisibleBy5(num) {
  return num % 5 === 0;
}

// 3. Write a function to check if a number is perfect square
// n = a * a
function isPerfectSquare(num) {
  if (num <= 0) return false;

  const sqrtN = Math.sqrt(num);
  const sqrtInt = Math.trunc(sqrtN);
  return sqrtInt * sqrtInt === num;
}

console.log(isPerfectSquare(254));
