// Write a program where an airplane climbs to a specific altitude(say 1000ft) over 10 intervals.
//  Use a for loop to display the altitude after each interval


let target=1000;
let interval=10;
let distanceCoveredPerInterval=target/interval;

for(i=1;i<=interval;i++){
    let currentAltitude=i*distanceCoveredPerInterval;
    console.log(`interval ${i} = distance covered:${currentAltitude}`);
}
console.log("Flight reached")