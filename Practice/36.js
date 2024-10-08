let array=["vajesh","sridhar","karthi"];
let a=0;
let b=0;
let newArray=[];
for(let i=0;i<array.length;i++){
    a=array[i];
    b=a[0].toUpperCase()+a.slice(1);

    newArray.push(b);
    
}
console.log(newArray);



