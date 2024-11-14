/* 
The filter method cretes a new array with all elements that
pass a test (provided as a function)

Filters the elemts from an array based on a condition, returning a new
array with elemnsts that satisfy the condition.

syntax : arry.filter(callback(element, index, array)
*/

const number = [1, 2, 3 ,4, 5, 6];
const check = number.filter(x => x > 3);
console.log(check);  // [ 4, 5, 6]

// const check1 = number.filter((x) => {
//     return x > 3
// }
// )
// console.log(check1); // [ 4, 5, 6]


const number1 = [1, 2, 3 ,4, 5, 6];
const check1 = number.filter(x => x > 3);
console.log(check1);



const number2 =  [4, 5, 6, 7, 8, 9];
const check2 = number.filter(x => x > 3);
console.log(check2)