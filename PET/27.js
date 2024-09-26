// Given the array temperatures = [75, 80, 72, 85, 90], 
// where each element represents the temperature in a specific region of a forest,
//  identify which regions have temperatures above 80 degrees.


let temperatures=[75,80,72,85,90];

let above=temperatures.filter(temperatures=> temperatures>80);

console.log(above);


//other method

let array=[75,80,72,85,90];
let empty=[];
 for(i=0;i<array.length;i++){
    if(array[i]>80){
        empty.push(array[i]);
    }
 }
 console.log(empty);