/*
Hoisting :-  In java script, hoisting is a mechanism where variable and function declaration
are moved (or "hoisted") to the top of their scope before code execution.
this means that you  can use variables and functions before declaring them in the code.
*/
// Function Hoisting :- function declarations are fully hoisted, meaning you can call the 
// function before its declared.

sayHello();
function sayHello(){
    console.log("hello cfi");    // prints
}

// However, funnctions expressions and arroe function assign to variables are not 
// hoisted in the same way.


