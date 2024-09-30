// You are given an array of student grades. Write a function that calculates the average grade
let array=[80,90,70,85];
let total=0;
function marks(){
    for(i=0;i<array.length;i++){
        total+=array[i];
    }
    return total;
}

let average=marks()/array.length;

console.log(average);
