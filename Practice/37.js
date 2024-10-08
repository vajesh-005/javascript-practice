let array=[1,45,3,12,45];
let b=[];
for(let i=0;i<array.length;i++){
    for(let j=i+1;j<array.length;j++){
        if(array[i]===array[j]){
            b.push(array[i]);
        }
        // else{
        //     console.log(array[i]);
        // }
    }
}
console.log(b);
