//DNH__Highlands Cong Hoa - HCM
// Logical Operators
// Nếu là số dương
function checkNumber1(n) {
  if (n > 0) {
  }
}

// Nếu là số chẵn
function checkNumber2(n) {
  if (n > 0 && n % 2 === 0) {
  }
}

// Nếu là số dương và lớn hơn 10
function checkNumber3(n) {
  if (n > 0 && n % 2 === 0 && n > 10) {
  }
}

// Nếu là số dương chẵn chia hểt cho 5 và lớn hơn 10
function checkNumber4(n) {
  if (n > 0 && n % 2 === 0 && n % 5 && n > 10) {
    // console.log("OKE");
  } else {
    // console.log("NOT OKE");
  }
}

// Nếu là số dương chẵn hoặc số âm lẻ
function checkNumber5(n) {
  const isEvenPositive = n > 0 && n % 2 === 0;
  const isOddNegative = n < 0 && n % 2 !== 0;

  if (isEvenPositive || isOddNegative) {
  }
}
