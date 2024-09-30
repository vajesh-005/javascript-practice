// // Given the array train_departures = [10, 15, 7, 20, 5], where each element represents the departure time of a train in 24-hour format,
// //  find the earliest train to depart.

// let trainDepartures=[10,15,7,20,5];

// let early=Math.min(...trainDepartures);
// console.log(early);

// // Given the array seats = [1, 0, 1, 1, 0, 0, 1, 0],
// //  where 1 means a seat is booked and 0 means a seat is available, count the total number of available seats.


// let a=[1, 0, 1, 1, 0, 0, 1, 0];
// let available=0;
// for(i=0;i<=a.length;i++){
//     if(a[i]===0){
//         available++;
//     }
// }
// console.log(`Total seats ${available}`);




// //another method

// let arrays=[1, 0, 1, 1, 0, 0, 1, 0];

// let seats=arrays.filter(arrays => arrays===0).length;
// console.log(seats);

// // Given the array soldiers = [120, 300, 250, 180, 150],
// //  where each element represents the number of soldiers assigned to different regions,
// //  find the region with the highest number of soldiers.

// let soldiers=[120,300,250,180,150];

// let max=Math.max(...soldiers);
// console.log(soldiers.indexOf(max));


// // Given the array populations = [50, 60, 70, 80, 90],
// //  where each element represents the population of an Indian state over the last 5 years,
// //  calculate the average population.

// let populations = [50, 60, 70, 80, 90];
//  let sum=0;


//  for(i=0;i<populations.length;i++){
//     sum+=populations[i];
//  }
//  totalAverage=sum/populations.length;

//  console.log(totalAverage);


//  // Given the array water_levels = [30, 50, 20, 40, 60], 
// // where each element represents the current water level in a tank,
// //  find the tank with the lowest water level.

// let array=[30,50,20,40,60];
// let a=Math.min(...array);

// console.log(array.indexOf(a));



// // Given the array days_until_festival = [30, 15, 45, 10, 25],
// //  where each element represents the number of days left until an important festival, 
// // find the closest upcoming festival.


// let days_until_festival = [30, 15, 45, 10, 25];

// let close=Math.min(...days_until_festival);
// console.log(close);
// console.log(days_until_festival.indexOf(close));


// // Given the array landing_times = [12, 15, 12, 18, 20], 
// // where each element represents the time a helicopter is scheduled to land,
// //  check if any two helicopters are scheduled to land at the same time.

// let landing_times = [12, 15, 12, 18, 20];

// let a= new Set(landing_times);

// if(a.size<landing_times.length){
//     console.log("two helicopters are landing");
// }
// else{
//     console.log("no same time landing")
// }


// // Given the array temperatures = [75, 80, 72, 85, 90], 
// // where each element represents the temperature in a specific region of a forest,
// //  identify which regions have temperatures above 80 degrees.


// let temperatures=[75,80,72,85,90];

// let above=temperatures.filter(temperatures=> temperatures>80);

// console.log(above);


// //other method

// let array=[75,80,72,85,90];
// let empty=[];
//  for(i=0;i<array.length;i++){
//     if(array[i]>80){
//         empty.push(array[i]);
//     }
//  }
//  console.log(empty);



//  // Given the array students_per_route = [45, 55, 30, 60, 40], 
// // where each element represents the number of students assigned to different bus routes,
// //  calculate the total number of buses required if each bus can hold a maximum of 50 students.


// let students=[45,55,30,60,40];
// let sum=0;
// let length=students.length;

// for(i=0;i<length;i++){
//     if(students[i]>=50){
//         sum=sum+2;
//     }
//     else{
//         sum++;
//     }
// }
// console.log(sum);



// // You have an array of daily expenses for a week. 
// // Write a function that calculates the total expenses for the week.
// let expenses=[20,20,20,20,20,20,20];
// let total=0;
// function expensestot(){
//     for(i=0;i<expenses.length;i++){
//         total+=expenses[i];
//     }
// return total
// }
// console.log(expensestot());



// // You are given an array of student grades. Write a function that calculates the average grade
// let array=[80,90,70,85];
// let total=0;
// function marks(){
//     for(i=0;i<array.length;i++){
//         total+=array[i];
//     }
//     return total;
// }

// let average=marks()/array.length;

// console.log(average);



// // You have an array of people ages. 
// // Write a function that filters out people who are 18 years old or older.

// let array=[23,18,15,14,55,8];
// let total=0;
// function age(){
//     for(i=0;i<array.length;i++){
//         if(array[i]>=18){
//             total++;
//         }
//     }
//     return total;
// }
// console.log(age());



// // You have an array of integers. Write a function that returns the count of the even numbers in the array.


// let array=[1,2,3,4,5,6,7,8,9,10];
// let count=0;
// function evenNumber(){
//     for(i=0;i<array.length;i++){
//         if(array[i]%2==0){
//             count++;
//         }
//     }
// return count;
// }
// console.log(evenNumber());