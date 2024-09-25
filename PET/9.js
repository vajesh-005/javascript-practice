
// Write a function calculateFactorial that takes a number n as a parameter and returns the factorial of that number using a while loop.
let a=1;
sum=1;
function calculateFactorial(n){
while(a<=n){
    sum*=a;
    a++;
}
}
calculateFactorial(10);
console.log(sum);