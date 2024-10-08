// Given a year in the variable exampleYear, write a program to check whether it is a leap year or not.
// Print "Y" if it's a leap year and "N" if it's a common year.


let exampleYear=2025;

if((exampleYear%4===0 && exampleYear%100!==0)||exampleYear%400===0){
    console.log("Leap Year");
}
else{
    console.log("No, It is not a leap year");
}