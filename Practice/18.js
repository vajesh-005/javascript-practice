// Given an array of strings count the number of elements which are starting with a vowel

let array=["Aishwarya","udhaya","ishan","eeswaran","vajesh","kavinisha","Umesh"];
let count=0;
let length=array.length;

for(let i=0;i<length;i++){
    let firstLetter=array[i][0];
    if(firstLetter==='a'|| firstLetter==='A' ||
       firstLetter==='e'|| firstLetter==='E' ||
       firstLetter==='i'|| firstLetter==='I' ||
       firstLetter==='o'|| firstLetter==='O' ||
       firstLetter==='u'|| firstLetter==='U'){
        count++;
    }
}
console.log(count);