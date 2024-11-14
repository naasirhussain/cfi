


let num = [ 1, 2, 4, 5, 7, 8];
let check = num.some((x) => x % 2 == 0)
console.log(check);  //  true


let num1 = [ 1, 3, 5, 7, 9];
let check1 = num1.some((x) => x % 2 == 0)
console.log(check1); // fasle


let num2 = [ 1, 3, 5, 7, 8];
let check2 = num2.some((x) => x % 2 == 0)
console.log(check2);  // true