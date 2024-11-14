// The every array method checks all the elements in the arrays and 
// passes the test defined by the functuions

let arr = [10,15,20,25];
let  check = arr.every(        // 10 > 15 - False
    (num) => {                  // 15 >= 15 - true
        returnnum >=15          // 20 >= 15  - true
    }                          // 25 >= 15 - true
)
console.log(check);

// if one false it will print total false




let arr1 = [10,15,20,25];
let  check1 = arr.every(        // 10 > 15 - False
    (num) => {                  // 15 >= 15 - true
        returnnum >=15          // 20 >= 15  - true
    }                          // 25 >= 15 - true
)
console.log(check1);


let arr2 = [10,15,20,25];
let  check2 = arr.every(        // 10 > 15 - False
    (num) => {                  // 15 >= 15 - true
        returnnum >=15          // 20 >= 15  - true
    }                          // 25 >= 15 - true
)
console.log(check2)