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
let test = () => {                   // arrow function 
    console.log("Hello collge")      // prints error
} ;

