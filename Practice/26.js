let num=[10,3,2,7,5];
let x=num.length;
let ans=[];
let a=0;

for(let i=0;i<x;i++){
    a=Math.min(...num);
    let b=num.indexOf(a);
        num.splice(b,1);
        ans.push(a);
}
console.log(ans);
