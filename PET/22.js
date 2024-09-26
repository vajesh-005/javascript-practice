// Given the array soldiers = [120, 300, 250, 180, 150],
//  where each element represents the number of soldiers assigned to different regions,
//  find the region with the highest number of soldiers.

let soldiers=[120,300,250,180,150];

let max=Math.max(...soldiers);
console.log(soldiers.indexOf(max));