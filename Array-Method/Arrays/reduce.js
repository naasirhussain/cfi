/*  The reduce method executes a reducer on each elemnt of that array, resulting
in a single output value. its commonly used to accuulateb vallues.
eg. summing numbers, cons=catenating strings.*/


const numbers = [100, 150, 200, 250, 300];
//                0    1    2    3    4
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 0 + sum of all 1000



const numbers1 = [5, 10, 15, 20, 25, 30];
//                0   1   2   3   4   5
const sum1= numbers1.reduce((acc, curr) => acc + curr, 2);
console.log(sum1); //  2 + sum



const numbers2 = [5, 10, 15, 20, 25, 30];
//                0   1   2   3   4   5
const sum2= numbers2.reduce((acc, curr) => acc + curr, 100);
console.log(sum2); // 100 + sum of all





