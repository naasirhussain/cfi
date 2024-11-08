/*
Control flow staements
3. Break, Continue, switch 
In Javscript break, continue, and switch are controlled flow statements that help 
control the execution of loops and conditional stetements.

1. break statement
The break statement is used to terminate the loop or switch statement. when break is
encountered the loop or switch ends immediately and control is passed
to the next statement after the loop or switch.

// break;
// the break statement is used to terminate the loop immedeately when executed
*/
 
 let tableName = 5;
 let start = 1;
 let end = 10;

for (start; start <= end; start++)
{
    console.log(`${tableName} x ${start} = ${tableName * start}`);

}  // prints  5x1=5, 5x2=10 -----------5x10=50




/*
2. continue statement
The continue statemt skips the current iteration of a loop and moves to the next iteration
unlike break, it does'nt terminate the loop, it just skipps rest of the code inside the loop 
for the particular iteration
*/

for (let i =1; i <= 5; i++)
{
    if (i === 4)
    {
        continue;
    }
console.log("value of i:", i);    // prints 1, 2, 3, 5 ( leaves 4)
}