let array=[2,4,5,6,7];
let sum=0;
let length=array.length;
function calc(n){
for(let i=0;i<length;i++){
    if(array[i]%2!==0){
        sum+=array[i];
    }
}
// if(sum%3===0){
//     return true;
// }
// else{
//     return false;
// }

}
let result=calc(array);
console.log(sum);
