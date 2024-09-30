// Given an array of strings count the number of elements which are starting with a vowel

let array=["Aishwarya","udhaya","ishan","eeswaran","vajesh","kavinisha","Umesh"];
let count=0;

for(i=0;i<array.length;i++){
    if(array[i][0]=="a"||"A" ||array[i][0]=="e" || "E" ||array[i][0]=="i" ||"I"||array[i][0]=="o" || "O"||array[i][0]=="u"||"U"){
        count++;
    }
}
console.log(count);