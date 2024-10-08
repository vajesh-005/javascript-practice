// You have an array of people ages. Write a function that filters out people who are 18 years old or older.
let array=[18,24,28,15,10,55];

function peopleAge(){
 for(i=0;i<array.length;i++){
    let x =array[i];
    if(x>=18){
        console.log(array.indexOf(x));
    }
 }
}
peopleAge(array);