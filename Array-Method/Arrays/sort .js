/* - sort :- thismethod sorts the elemenst od=f an array in place and returns the sorted array.
by default it sorts elements an strings in ascending order, which can sometimes give unexpected
results when sorting numbers */

const pets = [ 'dog', 'cat', 'bird', 'squrel'];
pets.sort();
console.log(pets); // bird, cat, dog, squrrel
                   // in Alphabetical Order


let numbers = [25, 45, 10, 1, 99, 100, 1000, 0, 65];
numbers.sort();
console.log(numbers);  // 0, 1 10, 100, 1000, 25, 45, 65, 99
// it sorts only string in this format


const num1 = [ 15, 10, 13,];
num1.sort((a,b) => a-b);
console.log(num1);  // 10, 13, 15


const num2 = [ 15, 10, 13,];
num1.sort((a,b) => b-a);
console.log(num1);  // 15, 13, 10

