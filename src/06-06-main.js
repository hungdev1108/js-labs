// 1. Random a number in range of [0, n]
// n = 10
// 0, 1, 5, 10
// Math.random() -> random [0, 1)
function randomNumber(n) {
  //  validate arguments
  if (n <= 0) return -1;
  // process
  const random = Math.random() * n;
  return Math.round(random);
}

console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));

// 2. Random a number in range of [a, b] với a < b
// min: a
// range: b - a
// [10, 100]
// 10
// 100 - 10 = 90
function randomNumberInRange(a, b) {
  // checking arguments
  if (a >= b) return -1;
  // process
  const random = Math.random() * (b - a);
  return Math.round(random) + a;
  // return
}

console.log(randomNumberInRange(50, 100));
