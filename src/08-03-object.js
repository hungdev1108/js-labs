// Deep clone object
const student = {
  name: 'Duong Ngoc Hung',
  age: 18,

  mark: {
    math: 10,
    english: 8,
  },
};

const cloneStudent = {
  ...student,
};

cloneStudent.mark.math = 1;
console.log(student.mark.math);

// solution
const cloneStudent = {
  ...student,
  mark: {
    ...student.mark,
  },
};

cloneStudent.mark.math = 1;
console.log(student.mark.math);
