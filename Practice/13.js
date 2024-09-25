// You are given an array of student grades. Write a function that calculates the average grade.


let a=[80,80,50,60];
let total=0;
function averageMark(){
    for(i=0;i<a.length;i++){
        total+=a[i];
    }
    let average=total/a.length;
    return average;
}
console.log(averageMark(a));