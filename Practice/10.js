// let numbers=[1234567];
// let  sum=0;
// let a=numbers.toString();
// console.log(a);
// let b=a.split("");
// console.log(b);
// for(i=0;i<b.length;i++){

//   b[i]=parseInt(b[i]);
// }
//  for(i=0;i<b.length;i++){
//   sum+=b[i];
   
//  }
//  console.log(sum);



let exampleYear = 2022;

if (exampleYear % 4 === 0 || exampleYear%400==0 && exampleYear % 100 !== 0) {
  console.log("Yes");  // It's a leap year
} else {
  console.log("No");  // It's a common year
}