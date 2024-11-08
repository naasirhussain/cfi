// objects vs Arrays

// Object - an object is a collection of key-values pairs. these are known as properties and
// the values can be any data type, including strings, number,arrays, funstions, or even other objects.

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
