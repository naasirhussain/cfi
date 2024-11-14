/* 
The includes() method checks if any array contains a 
certain elemnt, returning (true/ false)
*/

const fruits = ["'apple", "banana", "mango"];

console.log(fruits.includes("banana")); // true
console.log(fruits.includes("kiwi"));  // false


let numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes("10")); // false beacuse it is given in string



let numbers1 = [1, 2, 3, 4, 5];
console.log(numbers1.includes("5"));