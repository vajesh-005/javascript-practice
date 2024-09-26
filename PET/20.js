// Given the array train_departures = [10, 15, 7, 20, 5], where each element represents the departure time of a train in 24-hour format,
//  find the earliest train to depart.

let trainDepartures=[10,15,7,20,5];

let early=Math.min(...trainDepartures);
console.log(early);