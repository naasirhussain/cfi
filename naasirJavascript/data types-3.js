//  Arrays

let num1 = [3, 4, 5, 6, 7];
    //      0   1  2  3  4
let num2 = [45, "hello", true, {id: 345}, [15, 20] ];
   //        0      1     2       3          4
   //                           0    1      0   1
console.log(num1, num2);
// prints - [3, 4,--7], [45, true, --- [15,20]].

console.log(num1[3], num2[2]);
// 6, true

console.log(num2[3]);
// {id : 345}

console.log(num2[4][1]);
// 20

// modifying elements

num1[2]=6;
console.log(num1);  // 2 <--->  6

num2[4] =  50;
console.log(num2);  // [15,20]-----50

// Adding Elements

let cfi1 = [123, "naasir", "omer", true];
let cfi2 = [123, "zeeshan", "saad", false, [23]];
console.log(cfi1, cfi2);
// print all cfi1 & cfi2

cfi1.push("ismail");
console.log(cfi1);  // ismail in last of cfi1

cfi2.unshift("ssamid");
console.log(cfi2);  // samid im first of cfi2

// Removing elemts

let cfi3 = [234, "suhail", "mentor"];
let cfi4 = ['hello', 345, [23,45], "bye"];

cfi3.pop();
console.log(cfi3);  // removed mentor from cfi3

cfi4.shift();
console.log(cfi4);  // removed hello from 345




