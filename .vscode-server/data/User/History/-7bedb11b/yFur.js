// Funtions:

/*
 Recursions:
recursion is aprocess in which a function calls dirctly or indirectly inorder to solve a problem
by breaking it down into smaller, similar sub-problems. this repeated self- callimg continuous until it
reaches a base case, which is a condition where no furthrer recursion is needed, allowing the function
to statr returnig values back up through each ceel
in simpler terms, recursion is hen somnething is definrd or done in terms of itself until it reaches a stopping point.
*/


function sum(number){
    console.log(number - 1);
}sum(10);   // prints 9


function call(num){
    console.log(num);   // by here it prints one time 5
    call(num);          // if we put call inside block it prints many times ( infinite)
}
call(5);


function call(num) {
    if (num < 4) {
        return console.log("")
    }
}