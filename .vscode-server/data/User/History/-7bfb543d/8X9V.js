// //  Control flow staements

// // 1. Conditional statements

// // there are 4 types of conditional statements
// /*
// 1. if
// 2. if else
// 3. if  esle if  else
// 4. nested if else
// */

// // Example of   ( 1. if & 2. if else )

//  let x = 10;

//  if (x >=20) {
//     console.log("X is is grester thsn 20");
//  }else
//  {
//     console.log('less than 20');
//  } // prints less 20.



// // examople 2 - ( 1. if,    2. if else,    3.if   if else   if )


// let mymarks = 40;

// if (mymarks >= 70){
//     console.log("grade A")
// } else if (mymarks >= 60){
//     console.log("grade B");
// } else if (mymarks >= 40){
//     console.log("grade c")
// } else {
//     console.log("fail");
// }                              // prints ( garde C).

// // Another Example :-

// let realcolor = "red";

// if (realcolor == "yellow") {
//     console.log("select yellow");
// } else if (realcolor === "green") {
//     console.log("select green");
// } else if (realcolor == "blue") {
//     console.log("select blue");
// } else {
//     console.log("no selected color");
// }                                
//                         // prints ( no selcted color)


// // 4 type - nested if else

// let age = 20;

// if (age >= 18)
// {
//     console.log("you are an adult");
//     if (age >= 21) {
//         console.log('you are eligible');
//     } else {
//         console.log("but you are not eligilbe")
//     }
// }
// else {
//     console.log("you are a minor");
// }

// // prints you are an adult
//  // but you are not eligible



// // another example
// let myage = 10;

// if (myage >= 18)
// {
//     console.log("you are an adult");
//     if (myage >= 21) {
//         console.log('you are eligible');
//     } else {
//         console.log("but you are not eligilbe")
//     }
// }
// else {
//     console.log("you are a minor");
// }
 
// prints - you are minor.




let Grade = 100;
if (Grade >= 95){
    console.log("Grade A+");
    if (Grade >= 90);
    console.log("Grade A");
    if (Grade >= 85);
    console.log("Grade B+");
    if (Grade >= 80);
    console.log("Grade B");
    if (Grade >= 75);
    console.log("Grade C+");
    if (Grade >= 70);
    console.log("GradecC");
    if (Grade >= 65);
    console.log("Grade D+");
    if (Grade >= 60);
    console.log("Grade D");
}
else{
    console.log("Grade F");
}
}