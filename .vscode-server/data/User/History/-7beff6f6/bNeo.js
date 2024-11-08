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

 function greet (){                            // simple function -- without parameters
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


 
  function multipleOfNum (num1, num1, num3){
    concole
  }



  // you pass parameters to the function, which are used within the function
  // the function performs an anction, but it doesnt give anything back when its done
  // without a return statement,


  function greet(name){
    console.log("hello" + name +" !");       //  ===> old method
}
greet("Alice");   // hello Alice !


function greet2(name){
    console.log(`hello ${name} !`);
                                              //  ===> new method
}
greet2("naasir");   // hello naasir !






// Explanation :-
// Headers, name is aparameter, so we can pass any name when we call greet
// greet("Alice")Prints "Hello Alice !" to the console but doesnt return any value
// this function is used for its side effect (printing to console), not for producing a value.


function table(num){
    let i =1;
    for (i; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
table(5);   // prints 5 table




function table(num){
    let i =1;
    for (i; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
    console.log("-----------");
}
table(5);   // prints 5   
table(10);   // prints 10


function areaOfTriangle(base, height){
    let area = 0.5 * base * height;
    console.log("Area of Triangle: " + area);

}
    
areaOfTriangle(6,4);    // prints 12

