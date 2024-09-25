// A robot moves forward as long as its battery level is above 20%. 
// Using a while loop, simulate the robot's movement,
//  decreasing the battery level by 5% after each step and displaying the remaining battery level.
//  Once the battery level is below 20%, Display Battery is low.


let a=100;
while(a>=15){
if (a>=20){
    console.log(`Battery:${a}`);
}
else{
    console.log("Battery low ")
}
a=a-5;
}