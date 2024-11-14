// The array.From method creates a new array instance from array -like Or iterable object

const x = "naasir";
// convert a string to an array of characters
const check = Array.from(x);
console.log(check);  // ("n", "a", a s i r)

// It works only in strings


const y = "Hussain";
// convert a string to an array of characters
const check1 = Array.from(x);
console.log(check1);  // (Hussain)

const z = "md";
// convert a string to an array of characters
const check2 = Array.from(x);
console.log(check2);  // (md)
