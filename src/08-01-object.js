// Khai báo object
const student = {
  id: 1,
  name: 'Van A',
  name: 'Van B', // same key come later will take precedence
  isHero: true,
  'key has spaces': 'supeer', // key with spaces shoulde be wrapped in quotes

  sayHi() {
    console.log('Hello!');
  },
};

// Lấy value của key
const student1 = {
  id: 1,
  name: 'Van A',
  isHero: true,

  'avg mark': 9,
};

console.log(student1.name);
// console.log(student.avg mark); // Syntax Error
console.log('avg mark'); // 9

const key = 'avg mark';
console.log(student1.key); // undefined
console.log(student1[key]); // 9

// Thêm key mới cho Object
const student2 = {
  id: 1,
  name: 'Van A',
  isHero: true,
};

// update value of a key
student2.name = 'Van B';
student2.age = 18;
student2['mak'] = 10;

console.log(studen2.age); // 18
console.log(student2.mark); // 10

// NOTE: Student được khái báo bằng const thì sẽ không được phép gán cho một giá trị mới

// Xóa 1 key
const sutdent3 = {
  id: 1,
  name: 'Van A',
  isHero: true,
};

// Remove "name" key
delete student3.name;

console.log(student3.name);
