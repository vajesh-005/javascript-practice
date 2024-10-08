// Given a number of 7 digits, print the sum of the digits of the number.


// let a=1234567;

// let sum=0;

// let num=a.toString().split('');
// console.log(num);

// for(let i=0;i<num.length;i++){
//     sum+=i;
// }
// console.log(sum);


let sum=0;
function digitSum(num){

    let a=num.toString().split('');
    for(let i=0;i<a.length;i++){
        sum+=i;
    }
    return sum;
}
console.log(digitSum(1234567));
