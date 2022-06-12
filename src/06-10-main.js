// 1. Convert hours to seconds
function convertHoursToSeconds(hours) {
  if (hours < 0) return -1;
  if (hours == 0) return 0;

  const SECONDS_PER_HOURS = 3600;
  return hours * SECONDS_PER_HOURS; // hardcode
}
console.log(convertHoursToSeconds(5));

// 2. Give 3 number, find max
function findMax(a, b, c) {
  let max = a;

  // processing
  // check with b
  if (b > max) max = b;
  if (c > max) max = c;

  return max;
}
console.log(findMax(3, 7, 6));

// 3. Give 3 number, find max even number
function findMaxEven(a, b, c) {
  let max = Number.NEGATIVE_INFINITY;

  // processing
  // check a, b, c > 0 and a, b, c > max
  if (a % 2 === 0 && a > max) max = a;
  if (b % 2 === 0 && b > max) max = b;
  if (c % 2 === 0 && c > max) max = c;

  return max;
}
console.log(findMaxEven(3, 7, 6));
