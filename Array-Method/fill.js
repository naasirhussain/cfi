/*
The fill method chnages all the elments in an array to a static value, from
a statrt index(default 0) to an end index (default array.length).

syntax: array.fill (value, start, end)
*/

const arr = [1, 2, 3, 4, 5];
//           0  1  2  3  4 --- start
//           1  2  3  4  5  --- End
arr.fill("hello", 2, 4)    //  if we dont give index it will change all vlaues
console.log(arr);      // prints - 1, 2, hello, hello, 5



let arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
//           0   1   2   3   4   5   6   7   8   9    - satrt
//           1   2   3   4   5   6   7   8   9   10  -  End
arr1.fill("naasir", -2)
console.log(arr1);   // 10, 20, 30 -------80, naasir, naasir



let arr2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
//           0   1   2   3   4   5   6   7   8   9    - satrt
//           1   2   3   4   5   6   7   8   9   10  -  End
arr1.fill("naasir", -2)
console.log(arr2);

