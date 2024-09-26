// Given the array days_until_festival = [30, 15, 45, 10, 25],
//  where each element represents the number of days left until an important festival, 
// find the closest upcoming festival.


let days_until_festival = [30, 15, 45, 10, 25];

let close=Math.min(...days_until_festival);
console.log(close);
console.log(days_until_festival.indexOf(close));