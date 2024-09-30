// You have an array of daily expenses for a week. 
// Write a function that calculates the total expenses for the week.
let expenses=[20,20,20,20,20,20,20];
let total=0;
function expensestot(){
    for(i=0;i<expenses.length;i++){
        total+=expenses[i];
    }
return total
}
console.log(expensestot());
