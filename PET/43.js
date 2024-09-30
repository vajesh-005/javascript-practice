// You have an array of 3 objects, each representing a product with properties name and price. 
// Write a program to calculate and print the total price of all the products in the array.

let products = [
    { name: "Laptop", price: 800 },
    { name: "Phone", price: 500 },
  ]
  let sum=0;
  for(let i=0;i<products.length;i++){
    sum+=products[i].price;
  }
  console.log(sum);