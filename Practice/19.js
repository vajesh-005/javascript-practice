// Given an array of float find the average of the numbers.

let array=[4.123,5.23,8.10];
let empty=0;

for(i=0;i<array.length;i++){
    empty+=array[i];
}
let average=empty/array.length;
console.log(average);


