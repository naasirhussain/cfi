/*   Loops :-
In javscript loops are used to repeatedly execute a block of code as long as a specified
condition is met.  There are two main types of loops

1. Entry \-controlled loops-- The condition is checked [before] the loop body is executed 
Ex- for and while loops
2. Exit-controlled Lopps- The condition is checked [after] the loop body has been executed at least once.
Ex- do...while loop.


1. Entry Control loops

for loop
for is keyword & for is a entry controlled loop
for is a loop which is used to literate the code multiple times
for (initialixation; condition; increment/decremnet)
 {
 code block to be executed
 }
*/

for  (let i=0 ; i<5; i++)
{
    console.log(i);        //   prints 0 1 2 3 4
}

// for (let i=0; i<5; i++)  ---> // prints 0 1 2 3 4 5

let i=1;
for (i; i <=5; i++)
{
    console.log("Hi");      // Hello1, Hello2, ----- Hello10
}

//  1. Initializaation
//  2. condition  3. code block  4.increment/decrement
//  5. condition  6. code block  7. incement / decrement  .....

for (let r=1; r<= 10; r++)
{
    console.log("Hello");        // prints Hello,Hello ----- Hello ( 10 Times)
}

for (let i=1; i<=10; i++)
{
    console.log("Hello", i)      // prints Hello1, Hello2,------ HEllo10 
}

for (let i=1; i<= 10; i++)
{
    console.log(i*2);           // prints  2,4,6,8------20
}


// - Templete Literals
// console.log("Hello");
// --->  ` ` ( if use Tild instead of Doble commas, then we can use different variables)

for (let i=1; i<= 10; i++)
{

    console.log(`2 x ${i} = ${i*2}`);  // prints (5x1=5, 5x2=10, ------5x10=50)
}



// while loop
// while is keyword & while isa entry controlled loop
// while is a loop which is used to literate the code multiple times

// Declaration
/*
while (condition)
{ 
   code block to be executrd
    increment/decrement
}
*/

let j =1;
while (j<=5)
{
    console.log("HEllo");   // Prints HEllo 5 Times.
    j++;
}

let g=1;
while (g<=10)
{
    console.log(`7 x ${g} = ${g*7}`);   //prints 7x1=7, 7x2=14 -----7x10=70
    g++;
}


  //  2. Exit Control Loops
  /*
 do while loop

 do while is akeyword  & do while is a exit controlled loop
 do while is a loop which is used to iterate the code multiples times
 in do while the while condition is checked at the end of the loop shuold have to be true
 and it should have semicolon at the end
 
 // declaration

 do 
 {
      code block to be ecxecuted
      increment/decrement
 }
      while (condition);
*/

let s = 0;
do{
console.log(s);
s++;
}
while (s < 10);   // prints 0,1,2,3,------9



let z =1;
do{
    console.log(`3 x ${z} = ${z*3}`);  
    z++
}
while (z<=10);        // prints 3x1=3,3x2=6, ------3x3=9



let w=1;
do
{
    console.log(`${w} ^ ${w} = ${w*w}`);
    w++
}
while (w<=5);   /// prints if one *   1x1=1, 2x2=4, 3x3=9, 4x4=16, 5x5=25
            
/*
Summary 
These are the basic loop structures in javascript 