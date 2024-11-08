// 4. function expression

// In javascript functions can be defined as expressions



function sayHello(a, b){
    console.log(a + b);
}
sayHello(3,5);        // prints 8 till here
let totalSum = sayHello(3,5);
console.log(totalSum);  // undefined   // beacsue it just prints 8 but not stores
console.log(totalSum * 2);  // NaN  




// function Expression

let sayHello2 = function()
{
console.log("hello cfi 2")
}
sayHello2()     