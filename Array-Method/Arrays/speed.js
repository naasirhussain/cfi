// forEach


let start1 = performance.now() 
let box1 = [99, 199, 299, 399, 499];
box1.forEach((x) => console.log(x ** 78)) 
let end1 = performance.now()    
let totalTime1 = end1 - start1;       
console.log(totalTime1);             // 6.001 millsec



// map


let start2 = performance.now() 
let box2 = [ 99, 199, 299, 399, 499];
const speed = box2.map((number) => number ** 78);
console.log(speed); 
let end2 = performance.now()    
let totalTime2 = end2 - start2;       
console.log(totalTime2);           // 0.447 millisec


