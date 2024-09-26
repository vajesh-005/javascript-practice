// Given the array water_levels = [30, 50, 20, 40, 60], 
// where each element represents the current water level in a tank,
//  find the tank with the lowest water level.

let array=[30,50,20,40,60];
let a=Math.min(...array);

console.log(array.indexOf(a));