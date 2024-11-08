// Type Conversions
// 1. Implicit con,   2. Explicit con

// 1. any dattype to string

let grade = "2" + 3;
console.log(grade, typeof grade);    // 23 string

let mark  =  3 + "2";
console.log(mark, typeof mark);      // 32 string

let marks = "45" + true;
console.log(marks, typeof marks);  // 45true string

let mark1 = "500" + false;
console.log(mark1);              // 500false

let mark2 = "900" + "undefined";
console.log(mark2, typeof mark2);    //900undefined string

// 2. to numbers

let laptop1;
laptop1 = 4 + "40";
console.log(laptop1, typeof laptop1);  // 440

laptop1 = 4 + 40
console.log(laptop1, typeof laptop1);  // 44 number

laptop1 = 40 - 4;
console.log(laptop1, typeof laptop1);





