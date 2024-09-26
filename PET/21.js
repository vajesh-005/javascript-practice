// Given the array seats = [1, 0, 1, 1, 0, 0, 1, 0],
//  where 1 means a seat is booked and 0 means a seat is available, count the total number of available seats.


let a=[1, 0, 1, 1, 0, 0, 1, 0];
let available=0;
for(i=0;i<=a.length;i++){
    if(a[i]===0){
        available++;
    }
}
console.log(`Total seats ${available}`);




//another method

let arrays=[1, 0, 1, 1, 0, 0, 1, 0];

let seats=arrays.filter(arrays => arrays===0).length;
console.log(seats);