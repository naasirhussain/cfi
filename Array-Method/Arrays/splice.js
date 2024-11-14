/* The splice methd changes the contents of an array by removing,
replacing or adding elements, unlike, slice, splice modifies the original arry */

// syntax : array.splice(start, deleteCount, item, item)


let num = [10, 20, 30, 40, 50];
//          0   1   2   3   4
// replcing array elemnts using splice
num.splice(3, 1, 90);  // 3-index value, 1-no. of times, 90-replacing value
console.log(num);  // prints- [10, 20, 30, 90, 50]



// removing Array elmensts using splice
let num2 = [11, 22, 33, 44, 55];
//           0   1   2   3   4
num2.splice(3,4);
console.log(num2);    // 11, 22, 33



let num3 = [11, 22, 33, 44, 55];
//           0   1   2   3   4
num3.splice(2,3);
console.log(num3);








