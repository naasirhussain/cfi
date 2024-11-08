
// Types of user defined Functions
/*
3.  Functions with return

return:- If you need to get a vlaue back from the function, use return.
this lets the function provide a specific reslult that can be saved or used.
no return :- if you just want the function to do saomething (like log or alert) 
and dont need a reslut dont use return.
*/


function addNumbers(a, b){
    let total = a + b;
    console.log(total);      
}
let finalSum = addNumbers(4, 5);           // prints  9 
console.log(finalSum);                     //         undefined



function sum(num1, num2){
    return num1 + num2;
}
let totalSum = sum(4, 6);
console.log(totalSum);                   // prints  10 ( not undefined)




// without return

function addWithLog(a, b){
         console.log(a + b);
}
addWithLog(3,2);           /// 