/*
The findIndex() method returns the index of the first element in a array
that satisfies a provided test function.
if no elements satisfy the test, it return '-1'

systax: array.findIndex(callbacl(element, index, array))

*/

const numbers = [5, 10, 15, 20, 25];
// find the first index of the first number greter than 10
const index = numbers.findIndex(num => num >= 10 );
console.log(index);  // 1 - index value of 10



const numbers1 = [5, 10, 15, 20, 25];
// find the first index of the first number greter than 10
const index1 = numbers.findIndex(num => num >= 15 );
console.log(index1);   



const numbers2 = [5, 10, 15, 20, 25];
const index2 = numbers.findIndex(num => num >= 20 );
console.log(index2);