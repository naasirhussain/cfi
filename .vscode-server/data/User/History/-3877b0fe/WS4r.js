 // Other Operator
 // 1. ternary (conditional) operator
 // --> The ternary operator provides a shortand was thr eritr an if.else condition.

 
 let cfitotalmarks = 100;
 let cfipassmarks = 75;
 let check = cfitotalmarks >= cfipassmarks ? "pass" : "fail"
 console.log(check);    // print pass


 let bankbalance = 1000;
 let minbalance = 2000;
 let bankstatus = bankbalance >= minbalance ? "approved" : "rejected"
  console.log(bankstatus);  // rejected



  let myage = 22;
  let checkage = myage >= 18 ? "licenec" : "no licence"
  console.log(checkage);



  // 2. typeof operator
 console.log(typeof "hello");  // string
 console.log(typeof 24);       // number
 console.log(typeof true);     // boolean
 console.log(typeof false);    // boolean
 console.log(typeof {});       // object 
 console.log(typeof []);       // it is array but by default it id an object
 console.log(typeof null);     // Bug, 
 console.log(typeof undefined);
