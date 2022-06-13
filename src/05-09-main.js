// Write a function to classify student
// Receive mark as number, output as below:
// mark > 8 --> 'Excellence'
// 7 <= mark <= 8 --> 'Good'
// 4 <= mark <= 6 --> 'Not Good'
// mark < 4 --> 'Bad

// v1
export function classifyStudent1(mark) {
  if (mark < 0 || mark > 10) return 'Invalid mark!';
  let result;

  //Checking...
  if (mark > 8) result = 'Excellence';
  else if (mark >= 7) result = 'Good';
  else if (mark >= 4) result = 'Not Good';
  else result = 'Bad';

  return result;
}
// console.log(classifyStudent1(9));

// v2
export function classifyStudent2(mark) {
  // Validate arguments
  // mark shold be in range of [0, 10]
  if (mark < 0 || mark > 10) return 'Invalid mark!';

  let result = 'Bad';

  if (mark > 8) result = 'Excellence';
  else if (mark >= 7) result = 'Good';
  else if (mark >= 4) result = 'Not Good';

  return result;
}
// console.log(classifyStudent2(12));

// v3
export function classifyStudent3(mark) {
  if (mark < 0 || mark > 10) return 'Invalid mark!';

  // main
  if (mark > 8) return 'Excellence';
  if (mark >= 7) return 'Good';
  if (mark >= 4) return 'Not Good';

  return 'Bad';
}
// console.log(classifyStudent3(10));
