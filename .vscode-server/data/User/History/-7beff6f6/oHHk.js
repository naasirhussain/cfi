/*
Types of user defined Functions
 1. simple funtions
 2. functions parameters
 3. function with return
 4. functionn expression
 5. Arrow function
*/

// 1. simple functions
// A basic function that perfiorms actions and doesn't return a value

 function greet (){                            // function withput parameters
    console.log("Hllo world");
} 
greet();          // prints Hello world        


// 2. functions with parameter

function sayHello(firstName){                 // functions with parameters
        console.log(`Hello ${firstName}`);
}
   sayHello("naasir");      // prints Hello naasir



function sumOfNumbers(num1, num2){
    console.log(num1 + num2);
}
sumOfNumbers(4, 5);         // prints 9


sayHello