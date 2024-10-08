// Given a number 'N' print the sum of each digit to the power of number of digits in given input.



let n=1234;
let a=n.toString();
console.log(a);
let b=a.split('');
console.log(b);
let total=0;


for(let i=0;i<b.length;i++){
    total+=Math.pow(b[i],b.length);

}
console.log(total);