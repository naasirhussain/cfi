// Data types in java scipt.

/*
A. primitive date type
--> It can store single type of data.
1. string ==> textaul data ==> "hello iam naasir and age 22" or 'heelo iam naasir; (inverted commas)
2. number ==> Integer or decimal ==> 4 or 24.43 ( No inverted commas)
3. boolean ==> Any 2 values it can true or false.   ===> (but "True or False") in commas is string.
4. null ==> denotes to empty value.
5. undefined ==>A data type whose variable is not defined.


B. Non primitive data type.
--> it can store multiple data types
1. objects ===> are key value pair of connections of data
2. Arrays ===> It enables storing a collection of multiple items under a single name

*/
// example of object

let person = {
    fisrtName: "naasir",
    age: 22,
    phone: "8479874897",
    isAlive: true,
    aadhar: 7398578705837,
    text: null,
    sleep: undefined,
};
console.log(person);
// print all details
console.log(person.fisrtName, person.age);
// prints only name & age.


// Example of Arrays

