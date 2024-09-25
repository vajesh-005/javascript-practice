// let numbers=[1234567];
// let sum=0;
// let a=numbers.toString();
// console.log(a);
// let b=a.split("");
// console.log(b);
// let c=b.map(Number);
// console.log(c);
//  for(i=1;i<c.length;i++){
//   sum=sum+numbers;
   
//  }
//  return sum;
//  console.log(sum);
let exampleYear = 2020;

if (exampleYear % 4 === 0 || exampleYear % 100 !== 0) {
  console.log("Y");  // It's a leap year
} else {
  console.log("N");  // It's a common year
}