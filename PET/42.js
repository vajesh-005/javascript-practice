// You have an array of 4 objects, each representing a car with properties brand and model. 
// Write a program to add a new property year to each object and assign a value, then print the updated array.

let cars = [
    { brand: "Tata", model: "Nano" },
    { brand: "Honda", model: "Civic" }
  ]
  for(let i=0;i<cars.length;i++){
    cars[i].year=2020+i;
  }
  console.log(cars);