/*

--->>> [Most Impt Methd used in FrontEnd & BackEnd & React.js]

The foeEach() Method calls a function for each element in an araay
The forEach() mthd is not executed for empty elements.
Alwys remember that it doesnt return anything and if you try to
get the value it will be undeined.

The foeEcah mthd is udsed to execute a provided function once for
each arry element. its generally used when you need to perform a side effect 
(eg. logging, updating, a UI) rather than transforming the array itself, at it doesnt
return a new array.
*/
                                //  value  index 
const numbers =[1, 2, 3, 4, 5];      // 1   0
numbers.forEach((x, y) => {          // 2   1
    console.log(x, y);               // 3   2 
}                                    // 4   3
)                                    // 5   4



let start = performance.now()    //  This line is just used to check time only 

const arr = [10, 20, 30, 40, 50];
//            0   1   2   3   4
for (let i=0; i <= arr.length -1; i++) {
    console.log(arr[i]);            // prints - 10 20 30 40 50
}
arr.forEach((x) => console.log(x)); // prints - 10, 20, 30, 40, 50

let end = performance.now()     //  checking for time only
let totalTime = end - start;        // checking time
console.log(totalTime);             // 0.642 milli sec





let start1 = performance.now() 

const cfi =["helle", null, 450, 750, "naasir"];
cfi.forEach((cfi) => console.log(cfi));   // hello null 450 750 naasir

let end1 = performance.now()     //  checking for time only
let totalTime1 = end1 - start1;        // checking time
console.log(totalTime1);             // 0.123  milli sec



let num1 = [3, 4, 5, 6, 7];
num1.forEach((z) => console.log(z))   //  3 4 5  6 7
console.log(num1.forEach((z) => z));  // undefined


let cfi1 = num1.forEach
console.log



/* --> Four points in forEach 
1. The Returning value == x
2. ability to chain other methods == x
3.
4.
*/

let box = [ 2, 4, 6, 8];
box.forEach((x) => console.log(x * x))   // 4, 16, 36, 64
console.log(numbers.forEach((x) => x *x).filter((x) => x)); // error















