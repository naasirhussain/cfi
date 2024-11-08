// Type Conversion
// 2. Explicit Conversion

//1. Numbers

let school = Number(45);
console.log(school, typeof school);   // 45 number

let school1 = Number("45");
console.log(school1, typeof school1);  // 45 number

let school2 = Number(true);
console.log(school2, typeof school2);  // 1 number

let school3 = Number(false);
console.log(school3, typeof school3);   // 0 number

let school4 = Number("Hello");
console.log(school4, typeof school4);  // Nan number

let school5 = Number(undefined);
console.log(school5, typeof school5);   // NaN number



// 2. Strings

let collge = String(55);
console.log(collge, typeof collge);    // 55 String

let collge1 = String("55");
console.log(collge1, typeof collge1);   // 55 string

let collge2 = String("Hello");
console.log(collge2, typeof collge2);  // hello string

let collge3 = String(5 + 5);
console.log(collge3, typeof collge3);   //  10 String

let collge4 = String(5 + "15");
console.log(collge4, typeof collge4);  //525 string

let collge5 = String(5+true);
console.log(collge5, typeof collge5);  //  6 string

let collge6 = String(null);
console.log(collge6, typeof collge6); //  null string

let collge7 = String(undefined);
console.log(collge7, typeof collge7);  // undefined 



// 3. booleans

let india = Boolean(23);
console.log(india);    // true

let india1 = Boolean(45);
console.log(india1);   // true

let india2 = Boolean("Hello");
console.log(india2);            // true

let india3 = Boolean(6 + 6);
console.log(india3);         // true

let india4 = Boolean();
console.log(india4);   // false

let india5 = Boolean(null);
console.log(india5);         // false

let india6 = Boolean(undefined);
console.log(india6);              ///  false


















