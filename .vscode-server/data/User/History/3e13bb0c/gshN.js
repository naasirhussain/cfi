// when to use lrt & const
/*
Feature                  let                         const
reassign               allowed                     not-allowed
scope                block-scoped                  block-scoped
best use case    variables that need to change     immutable or refereence values

practice
use const by default unless you know the variables value will change
switch to let only if you plan to modify the varialbes later
this approch makes your code more predictable and helps avoid accidental bugs caused by unexpected varialbes changes.
*/
