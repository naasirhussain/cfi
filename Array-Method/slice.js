/* The slice mthd returns a shallow copy of portion of arry into a new arry
it does not modify the original array. this is useful when you want to extract
a sction of an arrray with out alerting the origin array. */


let numbers = [ 1, 2, 3, 4, 5, 6, 7]
            //  0  1  2  3  4  5  6
            //  1  2  3  4  5  6  7
// let myNewArray = numbers.slice(0,4);  // 0-Index value, 3- element value
let myNewArray1 = numbers.slice( 2, -2); // [ 3, 4, 5]  3- index, 4, 5- elment
console.log(myNewArray1);   // [1, 2, 3, 4]

 


let numbers1 = [ 1, 2, 3, 4, 5, 6, 7]
            //  0  1  2  3  4  5  6
            //  1  2  3  4  5  6  7
// let myNewArray = numbers.slice(0,4);  // 0-Index value, 3- element value
let myNewArray2 = numbers.slice( 2, -2); // [ 3, 4, 5]  3- index, 4, 5- elment
console.log(myNewArray2); 



let numbers3 = [ 1, 2, 3, 4, 5, 6, 7]
            //  0  1  2  3  4  5  6
            //  1  2  3  4  5  6  7
// let myNewArray = numbers.slice(0,4);  // 0-Index value, 3- element value
let myNewArray3 = numbers.slice( 2, -2); // [ 3, 4, 5]  3- index, 4, 5- elment
console.log(myNewArray3); 