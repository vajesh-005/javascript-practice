// Write a program that takes two arrays of Boolean values (e.g., [true, false, true] and [false, true, true]).
//  Perform an AND operation on corresponding elements from both arrays and store the result in a new array.
//  Print the resulting array.

let a=[true,false,true];
let b=[false,true,true];

let resultArray=[];
for(let i=0;i<a.length;i++){
    resultArray.push(a[i] && b[i]);
}
console.log(resultArray);