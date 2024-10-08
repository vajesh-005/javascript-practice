// Given an array of integers find the number of multiples of 5.

let array=[2,5,1,5,50,56,45];

for(i=0;i<array.length;i++){
    let a=array[i];
    if(a%5==0){
        console.log(`Multiples of 5 :${array[i]}`)
    }
}