// // Write a program to create an array of 5 exam scores. Calculate and print the average of the scores.

// let array=[81,90,88,85,75];
// let total=0;
// for(let i=0;i<array.length;i++){
//     total+=array[i];
// }
// let average=total/array.length;
// console.log(average);



// // // You have an array of test scores for 7 students.
// //  Write a program to find and print the highest score using the Math.max()
// //  function along with the spread operator.

// let array=[90,40,60,70,66,69,98];

// let a=Math.max(...array);
// console.log(a);



// // Write a program that stores an array of 3 decimal numbers.
// //  Convert each number to its binary equivalent using the toString(2) method and print the binary values.

// let array=[2.33,3.14,4.123];
// let a=array.toString(2);
// console.log(a);


// // Write a program that takes two arrays of Boolean values (e.g., [true, false, true] and [false, true, true]).
// //  Perform an AND operation on corresponding elements from both arrays and store the result in a new array.
// //  Print the resulting array.

// let a=[true,false,true];
// let b=[false,true,true];

// let resultArray=[];
// for(let i=0;i<a.length;i++){
//     resultArray.push(a[i] && b[i]);
// }
// console.log(resultArray);


// // Create an array of old prices for 4 items and another array with the new prices.
// //  Write a program to calculate and print the percentage increase for each item.

// let oldPrice=[30,40,50,60];
// let newPrice=[40,50,60,70];
//  let percentage=[];

//  for(let i=0;i<oldPrice.length;i++){
//     let increase=(newPrice[i]/oldPrice[i])*100;
//     percentage.push(increase.toFixed(2));
//  }
// console.log(percentage);


// // Write a program that takes two arrays of numbers representing two sets. 
// // Create a new array that represents the union of both sets (without duplicates) and print the result.

// let a=[3,6,9,12];
// let b=[2,3,7,12];

// let union=[...new Set([...a,...b])];
// console.log(union);



// Write a program to find and print the mode (the number having the highest count) in an array of 10 numbers. 
// If there are multiple modes, print any one of them.

// let numbers = [1, 3, 2, 3, 4, 5, 3, 5, 5, 6];
// let frequency = {};


// for (let i = 0; i < numbers.length; i++) {
//   let num = numbers[i];
//   frequency[num] = (frequency[num] || 0) + 1;
// }

// let mode = numbers[0];
// let maximumCount = 0;

// for (let num in frequency) {
//   if (frequency[num] > maximumCount) {
//     maximumCount = frequency[num];
//     mode = num;
//   }
// }

// console.log("Mode:", mode);

// Create an array of times (in minutes) that different tasks take to complete.
//  Write a program to find out how many full hours and leftover minutes each task takes using modulus (%) and division (/) operators,
//   and save the result in the same array.
//  Print the array.

// let taskTimes = [130, 45, 90, 150, 75];

// for (let i = 0; i < taskTimes.length; i++) {
//   let hours = Math.floor(taskTimes[i] / 60); 
//   let minutes = taskTimes[i] % 60;
//   taskTimes[i] = `${hours} hours and ${minutes} minutes`;
// }

// console.log(taskTimes);

// Create an array of 10 objects with keys principal, rateOfInterest and noOfYears.
//  Find the simple interest for each array object and store it in a new array. Print this array.


// let loans = [
//     { principal: 1000, rateOfInterest: 5, noOfYears: 2 },
//     { principal: 1500, rateOfInterest: 4, noOfYears: 3 },
//     { principal: 2000, rateOfInterest: 6, noOfYears: 1 },
//     { principal: 1200, rateOfInterest: 5.5, noOfYears: 4 },
//     { principal: 5000, rateOfInterest: 3.5, noOfYears: 5 },
//     { principal: 800, rateOfInterest: 4.8, noOfYears: 2 },
//     { principal: 3000, rateOfInterest: 7, noOfYears: 3 },
//     { principal: 2500, rateOfInterest: 6.2, noOfYears: 2 },
//     { principal: 4000, rateOfInterest: 5.5, noOfYears: 3 },
//     { principal: 3500, rateOfInterest: 4.5, noOfYears: 1 }
//   ];

//   let simpleInterest=[];

//   for(let i=0;i<loans.length;i++){
//     let loan=loans[i];
//     interest=(loan.principal*loan.rateOfInterest*loan.noOfYears)/100;
//     simpleInterest.push(interest);
//   }
//   console.log(simpleInterest);


// You have an array of 10 objects, each representing a student with keys subject1Marks, subject2Marks, and subject3Marks.
//  Write a program to calculate the total marks for each student and store them in a new array. Print the new array.


// let students = [
//     { subject1Marks: 85, subject2Marks: 78, subject3Marks: 90 },
//     { subject1Marks: 67, subject2Marks: 72, subject3Marks: 85 },
//     { subject1Marks: 92, subject2Marks: 88, subject3Marks: 91 },
//     { subject1Marks: 76, subject2Marks: 85, subject3Marks: 89 },
//     { subject1Marks: 88, subject2Marks: 90, subject3Marks: 94 },
//     { subject1Marks: 59, subject2Marks: 62, subject3Marks: 70 },
//     { subject1Marks: 79, subject2Marks: 83, subject3Marks: 88 },
//     { subject1Marks: 91, subject2Marks: 94, subject3Marks: 99 },
//     { subject1Marks: 65, subject2Marks: 68, subject3Marks: 72 },
//     { subject1Marks: 87, subject2Marks: 82, subject3Marks: 86 }
//   ];
  
//   let totalMarks = [];
  
//   for (let i = 0; i < students.length; i++) {
//     let student = students[i];
//     let total = student.subject1Marks + student.subject2Marks + student.subject3Marks;
//     totalMarks.push(total);  
//   }
  
//   console.log("Total Marks of Each Student:", totalMarks);


// You have an array of 10 objects, each representing monthly expenses with keys rent, groceries, and utilities. 
// Write a program to calculate the total monthly expense for each object and store it in a new array. Print the new array.
  
// let expenses = [
//     { rent: 1000, groceries: 300, utilities: 150 },
//     { rent: 1200, groceries: 350, utilities: 180 },
//     { rent: 950, groceries: 270, utilities: 140 },
//     { rent: 1100, groceries: 320, utilities: 160 },
//     { rent: 1050, groceries: 280, utilities: 170 },
//     { rent: 980, groceries: 290, utilities: 145 },
//     { rent: 1300, groceries: 400, utilities: 200 },
//     { rent: 900, groceries: 250, utilities: 130 },
//     { rent: 1400, groceries: 450, utilities: 220 },
//     { rent: 1150, groceries: 330, utilities: 175 }
//   ];
  
//   let totalExpenses = [];
  
//   for (let i = 0; i < expenses.length; i++) {
//     let monthlyExpense = expenses[i];
//     let total = monthlyExpense.rent + monthlyExpense.groceries + monthlyExpense.utilities;
//     totalExpenses.push(total);  
//   }
  
//   console.log("Total Monthly Expenses:", totalExpenses);
  