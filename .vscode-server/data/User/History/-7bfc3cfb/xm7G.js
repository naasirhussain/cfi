// Explicit Conversions - Number, String, Boolean

// In Explicit Conversions we use built in methods

// 1. converting to Numbers 

let school;
school = Number("30");  // 30 number
school = Number(30); // 30 number
school = Number (true);  // 1 number
school = Number (false);  // o number
school = Number ("hello"); // NaN number
school = Number ('null'); // Nan number 
school = Number('undefined');  // NaN number
console.log(school, typeof school);


// 2. Convertong to Strings 

let college;
college =  String(45);  // 45
college = String('33');  // 33
college = String('hello');  // hello
college = String(true);


console.log(college);