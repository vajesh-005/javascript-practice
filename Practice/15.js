// You have an array of integers. Write a function that returns the count of the even numbers in the array.
let a=[1,2,3,4,5,6,7];
let b=0;
function number(){
  for(let num of a){
    if(num%2===0){
        b++;
    }
   
  }
  console.log(b);
  
}
number(a);

