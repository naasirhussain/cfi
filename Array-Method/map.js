/*
The map method is used to tranfer each elemnt in an array and returns a 
new array with the tranformed elemts. its useful when you want to apply a 
function to each  element and store the result in anew array */

let abcd = [ 10, 20, 30, 40, 50];
const doubleIt = abcd.map((number) => number * 3);
console.log(doubleIt);  // 30, 60, 90, 120, 150


let numbers = [5, 4, 3, 2,1 ];
console.log(numbers.forEach((g) => g * g));  // unfined cannot give outside console
console.log(numbers.map((x) => x * x).filter((x) => x > 9));  // [25,16]



let pqrs = [ 10, 20, 30, 40, 50];
const twice = abcd.map((number) => number * 3);
console.log(twice);