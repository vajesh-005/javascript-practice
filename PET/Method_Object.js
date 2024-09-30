// // Create an array of 2 colors. Use push() to add 2 more colors in one line and print the new array.

// let array=["red","blue"];
// array.push("yellow","green");
// console.log(array);


// // Create an array of 5 fruits.
// //  Use shift() to remove the first two fruits, one by one, and print the array after each removal.

// let array=["Apple","Orange","Banana","Grapes","Lichi"];

// array.shift();
// console.log(array);
// array.shift();
// console.log(array);


// // Write a program to create an array of 2 sports.
// //  Use unshift() to add 3 more sports to the beginning in a single line and print the array.

// let array=["Cricket","Football"];
// array.unshift("Hockey","chess","Volleyball");
// console.log(array);


// // Write a program to find the index of "Laptop" in an array of 3 devices. Print the result.
// let array=["Tablet","Laptop","Mobile"];

// let a=array.indexOf("Laptop");
// console.log(a);


// // Create a string "HTML-CSS-JavaScript". Use split() to break it into an array of 3 elements and print the array.

// let a="HTML-CSS-JAVASCRIPT";
// let b=a.split(',');
// console.log(b);


// // Write a program to create an array of 4 numbers.
// //  Use pop() to remove the elements one by one and store them in a new array in reverse order.
// //  Print the reversed array.

// let array=[1,2,3,4];
// let emptyArray=[];
// let z=array.length;
// for(let i=0;i<z;i++){
//     let a=array.pop();
//     emptyArray.push(a);


// }
// console.log(emptyArray);


// // Create an array of 4 fruits.
// //  Use join() without any separator to combine the array elements into a single string and print the result.

// let array=["Apple","Orange","Pineapple","Papaya"];

// let a=array.join('');
// console.log(a);


// // Write a program to create an object car with properties make, model, and year. Print the model of the car.

// let info={
//     Make:"Supra",
//     Model:"v5",
//     Year:2024.
// };
// console.log(info.Model);


// // Create an array of 2 objects,
// //  where each object represents a book with properties title and author. Print the title of the first book.
// let array=[{
//     title:"Life of Pi",
//     Author:"vj"
// },
// {
//     title:"Jungle book",
//     Author:"jv"
// }
// ];
// console.log(array[0].title);


// // You have an array of 4 objects, each representing a car with properties brand and model. 
// // Write a program to add a new property year to each object and assign a value, then print the updated array.

// let cars = [
//     { brand: "Tata", model: "Nano" },
//     { brand: "Honda", model: "Civic" }
//   ]
//   for(let i=0;i<cars.length;i++){
//     cars[i].year=2020+i;
//   }
//   console.log(cars);


//   // You have an array of 3 objects, each representing a product with properties name and price. 
// // Write a program to calculate and print the total price of all the products in the array.

// let products = [
//     { name: "Laptop", price: 800 },
//     { name: "Phone", price: 500 },
//   ]
//   let sum=0;
//   for(let i=0;i<products.length;i++){
//     sum+=products[i].price;
//   }
//   console.log(sum);


//   // You have an array of 5 objects, each representing a student with properties name and grade.
// //  Write a program to find and print the name of the student whose grade is "A".

// let students = [
//     { name: "Amar", grade: "A" },
//     { name: "Akbar", grade: "B" },
//     { name: "Anthony", grade: "A" },
//   ]
//   for(let i=0;i<students.length;i++){
//     if(students[i].grade==="A"){
//         console.log(students[i].name);
//     }
//   }
  