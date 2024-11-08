// objects vs Arrays

// Object - an object is a collection of key-values pairs. 
// these are known as properties and the values can be any data type,
//cluding strings, number,arrays, funstions, or even other objects.

let person = {
    name: "naasir hussain",
    age: 22,
    isEmployed: false,
};
console.log(person);
// prints naasir hussain ------ false



// Accessing properties

console.log(person.name);
// prints naasir hussain  - this is easy than next one.
console.log(person['name']);
// prints naasir hussain



//adding or modifying properties

person.gender = "male"
console.log(person);
// prints add gender: male in person

person.gender = "female"
console.log(person);
// modify gender: female in person



let myAmazonUser = {
    firstName: "naasir Hussain",
    phone: 7674262244,
    age: 22,
    address: "mehdipatnam",
    gender: "male",
    active: true,
    cart: null,
    totalshopping: ["1plus", "samsung"],

};
console.log(myAmazonUser);
// prints all details

myAmazonUser.age = 25;
console.log(myAmazonUser);   // prints myAmazonUser and change age 25.

myAmazonUser.id = "AMZ00234";
console.log(myAmazonUser);   // prints muAmazonUser and add id : AMZ00234.


