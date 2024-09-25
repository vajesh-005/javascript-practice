// let a=[20,30,50,10,100,130,44];
//  let total=0;
// for(i=0;i<a.length;i++){
//     total+=a[i];
// }
// console.log(total);


let a=[20,30,50,10,100,130,44];
let total=0;
function totalExpenses(){

    for(i=0;i<a.length;i++){
     total+=a[i];
    }
    return total;
}


console.log(totalExpenses(a));