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