const numberList = [1, 3, 5, 7];
// remove 5, add [2, 4]
// => [1, 3, 2, 4, 7]
numberList.splice(2, 1, 2, 4);
console.log(numberList);

// Delete >>
const numberList1 = [1, 3, 5, 7];
numberList1.pop();
numberList1.pop();
console.log(numberList1);

// every v1
function checkIfAllEven(numberList) {
  if (!Array.isArray(numberList)) return false;
  // [2, 2, 4]
  let isValid = true;
  // checking ...
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (number % 2 !== 0) {
      isValid = false;
      break;
    }
  }
  return isValid;
}

// every v2
function checkIfAllEven(numberList) {
  if (!Array.isArray(numberList)) return false;
  // checking ...
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 !== 0) return false;
  }
  return true;
}
console.log(checkIfAllEven([2, 2, 3]));
console.log(checkIfAllEven([2, 2, 4]));

// some method with for i
function checkIfAllSome(numberList) {
  if (!Array.isArray(numberList)) return false;

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 === 0) return true;
  }
  return false;
}
console.log(checkIfAllSome([2, 2, 3]));
console.log(checkIfAllSome([3, 3, 5]));

// every again
function checkIfAllEvery2(numberList) {
  // Kiểm trả isArray
  if (!Array.isArray(numberList)) return false;

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 !== 0) return false;
  }
  return true;
}
console.log(checkIfAllEvery2([2, 1, 1]));
console.log(checkIfAllEvery2([2, 4, 8]));

// some again
function checkIfAllSome2(numberList) {
  // Kiểm tra isArray
  if (!Array.isArray(numberList)) return false;

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 === 0) return true;
  }
  return false;
}
console.log(checkIfAllSome2([1, 2, 4]));
console.log(checkIfAllSome2([1, 1, 11]));

// index of first
