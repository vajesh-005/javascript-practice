// Given an array of integers and 2 numbers a and b (a < b) 
// count the number of elements in the array which are between a and b



let array=[2,4,6,8,10];

let a=2;
let b=12;
let sum=0;

for(i=0;i<array.length;i++){
    if(array[i]>a && array[i]<b){
        sum++;
    }
}
console.log(sum);