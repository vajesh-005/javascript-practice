// Given the array landing_times = [12, 15, 12, 18, 20], 
// where each element represents the time a helicopter is scheduled to land,
//  check if any two helicopters are scheduled to land at the same time.

let landing_times = [12, 15, 12, 18, 20];

let a= new Set(landing_times);

if(a.size<landing_times.length){
    console.log("two helicopters are landing");
}
else{
    console.log("no same time landing")
}