// Fix the error in this function sumNumbers that takes a number n as a parameter and returns the sum of all numbers from 1 to n. 
// However, there is an error in the while loop that causes the function to return the wrong result.

function sumNumbers(n) {
    let sum = 0;
    let i = 0;  
    while (i <= n) {
        console.log(i);///
      sum += i;
      i++;
    }  
    return sum;
  }
  sumNumbers(10);