// Fix the issues in the code so that output is printed correctly


checkNumber(-5);
checkNumber(0);
checkNumber(10, 20);function checkNumber(num) {
  if (num < 0){
    console.log("Negative");}
  else if (num > 0) {
    console.log("Positive");
  } else {
    console.log("Zero");
  }
}