/*
Hoisting :-  In java script, hoisting is a mechanism where variable and function declaration
are moved (or "hoisted") to the top of their scope before code execution.
this means that you  can use variables and functions before declaring them in the code.
*/
// Function Hoisting :- function declarations are fully hoisted, meaning you can call the 
// function before its declared.

sayHello();                       // simple function ( hoisting woeks in onlu simple function)
function sayHello(){
    console.log("hello cfi");    // prints hello cfi
}

// However, funnctions expressions and arroe function assign to variables are not 
// hoisted in the same way.
 

test();
let test = () => {                   // arrow function  ( also cannot use in function expression)
    console.log("Hello collge")      // prints error ( cannot print in this before decalring function )
} ;


/*
Anonymous function:-   An A.F in js is a function that does not a name.
its often used when you need a function as a value, particuularly in cases where you dont 
need to reference the function later.
Anoynpmus function are useful for single use functions or for functions passed as program
*/
// Anonymous function

let sayHello1 = function(){
    console.log("hello india");
}


 // 7.  IIFE ( Imediate invoked function expression)

 (function (){
    console.log("Hello hyd");
 })