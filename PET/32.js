// You have an array of integers. Write a function that returns the count of the even numbers in the array.


let array=[1,2,3,4,5,6,7,8,9,10];
let count=0;
function evenNumber(){
    for(i=0;i<array.length;i++){
        if(array[i]%2==0){
            count++;
        }
    }
return count;
}
console.log(evenNumber());