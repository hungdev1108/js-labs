// Set up reduce = for i
const result = [2, 4, 6].reduce((sum, number) => sum + number, 0);
console.log('result:', result);

/// reduce(arr, callbackFn, initialValue)
// rules:
// arr should be an array and callbackFn should be a function
// arr.length = 0 and initialValue === undefined => throw error
// - arr.length = 0 and initialValue !== undefined => return initialValue
function reduce(arr, callbackFn, initialValue) {
  if (!Array.isArray(arr) || typeof callbackFn !== 'function') {
    // show error message
    throw new Error('Invalid parameters');
  }

  // array is an array
  if (arr.length === 0) {
    if (initialValue === undefined) {
      // show error message
      throw new Error('Should have initialValue when arr is empty');
    }

    return initialValue;
  }

  // check initialValue
  const hasInitialValue = initialValue !== undefined;
  const startIndex = hasInitialValue ? 0 : 1;
  let accumulator = hasInitialValue ? initialValue : arr[0];

  // loop
  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callbackFn(accumulator, arr[i], i);
  }

  return accumulator;
}

function calcSum(prevSum, number) {
  return prevSum + number;
}
const result1 = reduce([2, 4, 6], calcSum, 0);
console.log('result1:', result1);

// inlined function
reduce(
  [2, 4, 6],
  function (prevSum, number) {
    return prevSum + number;
  },
  0
);

const result2 = reduce([2, 4, 6], (prevSum, number) => prevSum + number, 0);
console.log('result2:', result2);
