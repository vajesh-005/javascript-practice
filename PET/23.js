// Given the array populations = [50, 60, 70, 80, 90],
//  where each element represents the population of an Indian state over the last 5 years,
//  calculate the average population.

let populations = [50, 60, 70, 80, 90];
 let sum=0;


 for(i=0;i<populations.length;i++){
    sum+=populations[i];
 }
 totalAverage=sum/populations.length;

 console.log(totalAverage);