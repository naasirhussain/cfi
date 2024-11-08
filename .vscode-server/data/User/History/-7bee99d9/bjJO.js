//  5. Arrow Function
// Introduced in ES6(2015)
// Aarrow Function allows us to write shorter function syntax
// before arrow functions

function sayHello(){          // Simple function
    console.log("Hello");      // prints Hello
}
sayHello();                  


let sayHello1 = function(){           // function Expression
    console.log("Hello world");     // prints Hello world
}
sayHello1();



// Arrrow function

let sayHello2 = () =>  {          // arrow function ( we remove function and put =>)
    console.log("Hello cfi");      // prints hello cfi
}
    sayHello2();

// Example

function sumNumbers (a, b) {          // simple functions
return a +b ;
}
console.log(sumNumbers (2,6));      // prints 8


let sumNumbers1 = (a, b) => a + b;    // arrow function used for one line code 
console.log(sumNumbers (2, 3));       //  prints 5