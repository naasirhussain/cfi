// Implicit Conversion


1. Any Datatype to String ( Using + operator)

let grade = "2" + 3;
console.log(grade, typeof grade);   // prints 23 string

grade = "4" + true;
console.log(grade, typeof grade);  // 4true string

grade = "55" + null;
console.log(grade);  //  55null

grade = "5" + undefined;
console.log(grade);   //5undefined 



// Any Datatype to Number (using + operator) ( -, /, *)

let marks;
marks = 4 + "5";       // prints 45
marks = 4 + 5;      //  9
marks = 4 - "2";     //  2
 marks = 4 - 2;       //  2
marks = "5" * 3;    // 15 
marks = "5" + 3;    // 53
marks = "5" + "3";  // 53
marks = "5" - "2";    // 3
 marks = 5 - "3";   // 2
 marks = "hello" + "Hi"  // HelloHi
 marks = "Hello" - "HI" //  Nan
 marks = 5 - "hello"  // Nan
 marks = 6 + true;  // 7
 marks = 6 - false  // 6
 marks = "6" + ""  // 6 string
console.log(marks);


// Any datatype to Boolean

let check = true + "5"  // true5 string
check = true + 3  // 4 number
check = true - 3 // -2 number
check = true + true; // 2number
check = true - true; // 0 number
check = true + null  // 1 number
check = true - null // 1 number 
check = true + undefined // NaN number
console.log(check,typeof check); 



// Any  data type to null

let results;
results = null 

