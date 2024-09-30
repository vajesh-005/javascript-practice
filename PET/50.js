// Write a program that takes two arrays of numbers representing two sets. 
// Create a new array that represents the union of both sets (without duplicates) and print the result.

let a=[3,6,9,12];
let b=[2,3,7,12];

let union=[...new Set([...a,...b])];
console.log(union);