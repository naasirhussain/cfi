// Operators - Non Primitive

// 1. objests

let man = {
    name: "Hussain",
    age: 25,
    isThere: true,
    text: null,
    sleep: undefined,
};
console.log(man);  // Hussain, 25, true, null, undefined.


let boy = {
    name: "Hussain",
    age: 25,
    isThere: true,
    text: null,
    sleep: undefined,
};
console.log(boy.name, boy.age);  // Hussain, 25


let person ={
    name: "naasir",
    age: 22,
    height: 6.2,
    isEmployed: "No",
};
console.log(person); // naasir, 22, 6.2, No.

person.gender = "male";
console.log(person);  // Total details and gender : male

person.gender = "alpha male";
console.log(person);   // male -- alpha male




let myHome ={
    firstName: "naasir hussain",
    age: 22,
    city: "Hyd",
    gender: "male",
    active: true,
};
console.log(myHome);     // naasir hussain, 22, Hyd, male, true

myHome.age = 30;
console.log(myHome);   //  22 -- 30

myHome.adress = "CFI";
console.log(myHome); // adding adres in above details

delete myHome.active;
console.log(myHome);   // removed active 


let college ={
    firstName: 

}
console.log(college);


