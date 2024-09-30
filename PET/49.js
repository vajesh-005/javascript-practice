// Create an array of old prices for 4 items and another array with the new prices.
//  Write a program to calculate and print the percentage increase for each item.

let oldPrice=[30,40,50,60];
let newPrice=[40,50,60,70];
 let percentage=[];

 for(let i=0;i<oldPrice.length;i++){
    let increase=(newPrice[i]/oldPrice[i])*100;
    percentage.push(increase.toFixed(2));
 }
console.log(percentage);