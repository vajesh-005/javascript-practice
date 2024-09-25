// Write a function printMultiplicationTable that takes a number n, range r and prints the multiplication table for that number in reverse order.


function printMultiplicationTable(n){
 for(i=10;i>=1;i--){
    console.log(`${n}*${i}=${n*i}`);
 }
}
printMultiplicationTable(5);