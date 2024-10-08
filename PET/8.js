// Write a function sumNumbers that takes a number n as a parameter and returns the sum of all numbers from 1 to n using a while loop.

let sum=0;
function sumNumbers(n){
    for(i=1;i<=n;i++){
        sum+=i;
    
    }
    return sum;
}
console.log(sumNumbers(10));
