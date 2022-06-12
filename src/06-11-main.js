// 1. Get the ones of a number having 3 digits
function extractTheOnes(num) {
  if (num.toString().length !== 3) return -1;

  // ex: 123 => 123 % 10 = 3
  return num % 10;
}
console.log(extractTheOnes(521));

// 2. Get the tens of a number having 3 digits
function extractTheTens(num) {
  if (num.toString().length !== 3) return -1;

  // ex: 123 => 123 % 100
  // => 23 / 10 = 2.3 --> 2
  return Math.trunc((num % 100) / 10);
}
console.log(extractTheTens(782));

// 3. Get the hundreds of a number having 3 digits
function extractTheHundreds(num) {
  if (num.toString().length !== 3) return -1;

  // ex: 984 / 100 = 9.84 => 9
  return Math.trunc(num / 100);
}
console.log(extractTheHundreds(984));
// 4. Sum all digits of a number having 3 digits
function SumDigits(num) {
  if (num.toString().length !== 3) return -1;

  const ones = num % 10;
  const tens = Math.trunc((num % 100) / 10);
  const hundreds = Math.trunc(num / 100);

  return ones + tens + hundreds;
}
console.log(SumDigits(984));
