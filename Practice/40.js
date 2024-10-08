// Input: sentence = "hello world", k = 2
// Output: "llohe rldwo"  // Rotate "hello" to "llohe" and "world" to "rldwo"


// let str="hello world";
// let a=str.split(',');
// console.log(a);

let sum=0;
let a=[12334];
let b=a.toString();
let c=b.split('');
console.log(c);
let d=c.map(Number);
console.log(d);
for(let i=0;i<d.length;i++){
    sum+=d[i];
}
console.log(sum);