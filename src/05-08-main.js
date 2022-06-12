// Viết hàm kiểm tra số dương chẵn ==> Trả về True false
// ==> n > 0 va n % 2
// flag
// v1
function isPositiveEvenNumber(n) {
  let isValid; // undefined

  // checking...
  if (n > 0 && n % 2 === 0) {
    isValid = true;
  } else {
    isValid = false;
  }
  return isValid;
}

// v2
function isPositiveEvenNumber(n) {
  let isValid = false; // undefined

  // checking...
  if (n > 0 && n % 2 === 0) {
    isValid = true;
  }

  return isValid;
}

// v3
function isPositiveEvenNumber(n) {
  //   let isValid = false; // undefined
  // checking...
  if (n > 0 && n % 2 === 0) {
    // isValid = true;
    return true;
  }
  return false;
}

// v4
function isPositiveEvenNumber(n) {
  return n > 0 && n % 2 === 0;
  //   //   let isValid = false; // undefined
  //   // checking...
  //   if (n > 0 && n % 2 === 0) {
  //     // isValid = true;
  //     return true;
  //   }
  //   return false;
}
