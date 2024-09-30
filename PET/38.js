// Write a program to create an array of 4 numbers.
//  Use pop() to remove the elements one by one and store them in a new array in reverse order.
//  Print the reversed array.

let array=[1,2,3,4];
let emptyArray=[];
let z=array.length;
for(let i=0;i<z;i++){
    let a=array.pop();
    emptyArray.push(a);


}
console.log(emptyArray);
