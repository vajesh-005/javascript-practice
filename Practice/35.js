let array=[2,6,5,7,3];
let length=array.length;
let newArray=[];

for(let i=0;i<length;i++){
    var a=Math.min(...array);
    var b=array.indexOf(a);
        array.splice(b,1);
        newArray.push(a);
}
console.log(newArray);