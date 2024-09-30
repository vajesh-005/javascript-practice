// calculateArea();
// greetUser();

// function calculateArea() {
//  const radius = 5;
// //  let area;
//  var area = Math.PI * radius * radius;
//  console.log(area);
// }
// function greetUser() {
 
//  var userName = "John";
//  console.log(userName);
// }




// // Why is this loop not stopping?
// //  How can you modify the code to ensure the loop counts down properly upto 100?

// let count = 1;
// while (count <= 100) {
//  console.log("Counting down: " + count);
//  count = count + 1;
// }



// // Why always It's cold outside. is printed irrespective of the temperature value. Fix this!

// let temperature = 30;
// if (temperature <20) {
//     console.log("It's cold outside.");
//    } 
// else {
//     console.log("It's warm outside.");
//    }



// // Fix the issues in the code so that output is printed correctly


// checkNumber(-5);
// checkNumber(0);
// checkNumber(10, 20);function checkNumber(num) {
//   if (num < 0){
//     console.log("Negative");}
//   else if (num > 0) {
//     console.log("Positive");
//   } else {
//     console.log("Zero");
//   }
// }


// // Write a function sumNumbers that takes a number n as a parameter and returns the sum of all numbers from 1 to n using a while loop.

// let sum=0;
// function sumNumbers(n){
//     for(i=1;i<=n;i++){
//         sum+=i;
    
//     }
// }
// sumNumbers(10);
// console.log(sum);



// // Write a function calculateFactorial that takes a number n as a parameter and returns the factorial of that number using a while loop.
// let a=1;
// sum=1;
// function calculateFactorial(n){
// while(a<=n){
//     sum*=a;
//     a++;
// }
// }
// calculateFactorial(10);
// console.log(sum);


// // Write a function printEvenNumbers that takes a number n as a parameter and prints all even numbers from 1 to n using a while loop.


// let i=1;
// let sum=0;
// function printEvenNumbers(n){
// while(i<=n){
//     if(i%2===0){
//         console.log(i);
//     }
//     i++;
// }
// }
// printEvenNumbers(10);

// // Fix the error in this function sumNumbers that takes a number n as a parameter and returns the sum of all numbers from 1 to n. 
// // However, there is an error in the while loop that causes the function to return the wrong result.

// function sumNumbers(n) {
//     let sum = 0;
//     let i = 0;  
//     while (i <= n) {
//         console.log(i);///
//       sum += i;
//       i++;
//     }  
//     return sum;
//   }
//   sumNumbers(10);

//   // Write a JavaScript function classifyNumber that accepts a number and returns a string based on the following rules:

// // If the number is divisible by 3, return "Divisible by 3".
// // If the number is divisible by 5, return "Divisible by 5".
// // If the number is divisible by both 3 and 5, return "Divisible by both 3 and 5".
// // If the number is neither divisible by 3 nor 5, return "Not divisible by 3 or 5"

//  function classifynumber(n){
//     if(n%3===0 && n%5===0){
//         console.log("Divisible by 3 & 5");
//     }
//     else if(n%3===0){
//         console.log("Divisible by 3");
//     }
//     else if(n%5===0){
//         console.log("Divisible by 5 ");
//     }
//     else{
//         console.log("Not Divisible")
//     }

//  }
//  classifynumber(45);


//  // . Write a JavaScript function getDayName that takes a number (from 1 to 7) and returns the corresponding day of the week.

// function getDayName(n) {
//     switch (n) {
//         case 1:
//             console.log("Monday");
//             break;
//         case 2:
//             console.log("Tuesday");
//             break;
//         case 3:
//             console.log("Wednesday");
//             break;
//         case 4: 
//             console.log("Thursday");
//             break;
//         case 5:
//             console.log("Friday");
//             break;
//         case 6:
//             console.log("Saturday");
//             break;
//         case 7:
//             console.log("Sunday");
//             break;
//     }
// }
// getDayName(6);


// // Write a function printMultiplicationTable that takes a number n, range r and prints the multiplication table for that number in reverse order.


// function printMultiplicationTable(n){
//     for(i=10;i>=1;i--){
//        console.log(`${n}*${i}=${n*i}`);
//     }
//    }
//    printMultiplicationTable(5);


//    // Write a program where a robot must complete 10 laps around a circuit. 
// // Use a while loop to count the laps and display the lap number each time the robot completes one



// let a=10;
// i=1;
// while(i<=a){
//     console.log(`Lap number${i}`);
//     i++;
// }


// // A robot moves forward as long as its battery level is above 20%. 
// // Using a while loop, simulate the robot's movement,
// //  decreasing the battery level by 5% after each step and displaying the remaining battery level.
// //  Once the battery level is below 20%, Display Battery is low.


// let a=100;
// while(a>=15){
// if (a>=20){
//     console.log(`Battery:${a}`);
// }
// else{
//     console.log("Battery low ")
// }
// a=a-5;
// }


// // An airplane altitude currently is 1000ft and its altitude reduces each second by 10ft.
// //  Write a program which will print “Flight arrived” when the airplane altitude reaches 0ft.


// let a=1000;
// let i=0;
// while(i<=a){
//     if(a>0){
//         console.log(`Altitude:${a}`);
//     }
//     else{
//         console.log("Landed")
//     }
//     a=a-10;
// }



// // Based on the flight’s destination, direct the airplane to a specific runway.
// //  Use a switch statement to assign the runway depending on the destination entered by the user.



// function direction(n){
//     switch(n){
//         case "India":
//             console.log("north");
//             break;
//         case "Australia":
//             console.log("South");
//             break;
//         case "germany":
//             console.log("East");
//             break;
//         case "Argentina":
//             console.log("West");
//     }
// }
// direction("Argentina")


// // Write a program where an airplane climbs to a specific altitude(say 1000ft) over 10 intervals.
// //  Use a for loop to display the altitude after each interval


// let target=1000;
// let interval=10;
// let distanceCoveredPerInterval=target/interval;

// for(i=1;i<=interval;i++){
//     let currentAltitude=i*distanceCoveredPerInterval;
//     console.log(`interval ${i} = distance covered:${currentAltitude}`);
// }
// console.log("Flight reached")