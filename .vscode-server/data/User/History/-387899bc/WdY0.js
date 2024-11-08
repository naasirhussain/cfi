// Logical operators
/*
Logical oprators are used to determine the logic between variable or values 
given that x = 6 & y = 3, the table below explain the logical operators

operator  |  descrption  |  example
----------------------------------------------------------
&&        |     and      |    (x < 10 && y > 1) is true
||        |      or      |   ( x == 5 || y == 5)is flase
!         |     not      |   !(x == y ) is true


!. AND (&&), OR ( || ), NOT ( ! ), perators truth table 
// Ex by clean water and dirty water mix into 4 ratio 
                                    

 A      |     B        |     A && B   |   A || B  |   !A  ( direct oppiste of value)
 -------------------------------------------------------------------
true    |    true      |      true    |   false   |    True
true    |    false     |      false   |   true    |    true
false   |    true      |      false   |   true    |    false
false   |    false     |      false   |   true    |    false

*/

let a = true;
let b = false;

//AND &&
console.log(a && b);  // false
console.log(b && a);  //
console.log(b && b)
console.log(a && a);

