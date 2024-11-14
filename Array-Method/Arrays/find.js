/*
 The find method returns the value of the first elemt in the array
that satistifies the provides testing functions. if no elemt satisfy the
tseting function , it returns undefined 


symtax : array.find(callback(elemnt,  index, array, thisArg)
*/

const numbers = [ 3, 5, -2, -4, 7, -9, -10];
// find the first negative number
const check = numbers.find(num => num < 0);
console.log(check);   // prints (-2) - 1st -ve No.



const numbers1 = [  -2, -4, 7, 8, 9, -9, -10];
// find the first negative number
const check1 = numbers.find(num => num < 0);
console.log(check1);


const numbers2 = [  -2, -4, 7, 8, 9, -9, -10];
// find the first negative number
const check2 = numbers.find(num => num < 0);
console.log(check2);