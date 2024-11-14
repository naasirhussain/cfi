/*
The fisrt()method creates a new array with all sub-array elemts concatenated
into it recursively up to the specified depth
*/
//It converts the nested array inyo simple array

const nestedarray = [1, 2, [3, 4, [5, 6]]];
// flatten the array by one level
const n1 = nestedarray.flat(1);
console.log(n1);   // prints - [ 1, 2, 3,4, [5, 6]];



const num1 = [1, 2, [3, 4, [5, 6]]];

const n2 = num1.flat(Infinity);
console.log(n2); // [ 1 2 3 4 5 6 ]



const num2 = [1, 2, [3, 4, [5, 6]]];

const n3 = num1.flat(Infinity);
console.log(n3);