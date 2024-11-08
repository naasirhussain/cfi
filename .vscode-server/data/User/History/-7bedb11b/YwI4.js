// // Funtions:

// /*
//  Recursions:
// recursion is aprocess in which a function calls dirctly or indirectly inorder to solve a problem
// by breaking it down into smaller, similar sub-problems. this repeated self- callimg continuous until it
// reaches a base case, which is a condition where no furthrer recursion is needed, allowing the function
// to statr returnig values back up through each ceel
// in simpler terms, recursion is hen somnething is definrd or done in terms of itself until it reaches a stopping point.
// */


// function sum(number){
//     console.log(number - 1);
// }sum(10);   // prints 9


// function call(num){
//     console.log(num);   // by here it prints one time 5
//     call(num);          // if we put call inside block it prints many times ( infinite)
// }
// call(5);


// function call(num) {
//     if (num < 2) {
//         return console.log("End");
//     }
//     console.log(num);
//     call (num -1);
// }
// call(5);       // prints 5  4  3  2  end


// function hello(fun) {
//     if (fun < 1){
//         return console.log("Stop")
//     }
//     console.log(fun);
//     hello (fun - 5);
//     }
// hello(15);


function fac(a){      // a = 6          // example of factorial
if (a == 0 || a ==1 ) {
    return 1;
}
   return a * fac(a-1);
}
console.log(fac(5));     // prints 120 = 5x4x3x2x1= 120)

/*
fac(5) === fac(a)
a = 5;
*/


function number(num1){
    if (num1 = 1 || num1 == 2);{
    return 1;
}
     return num1 * number(num1 -1);
}
console.log(number(4));