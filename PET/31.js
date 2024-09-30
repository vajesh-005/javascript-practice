// You have an array of people ages. 
// Write a function that filters out people who are 18 years old or older.

let array=[23,18,15,14,55,8];
let total=0;
function age(){
    for(i=0;i<array.length;i++){
        if(array[i]>=18){
            total++;
        }
    }
    return total;
}
console.log(age());