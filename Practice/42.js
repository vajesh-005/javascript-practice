let a="hello world";
let str='';
let n=2;
let b= a.split(" ");
console.log(b);
let arr1=[b[0]];
let arr2=[b[1]];
let c=arr1[0].split("");
let d=arr2[0].split("");
console.log(c);
console.log(d)
let e = c.splice(n,c.length);
c.unshift(e.join(''));
let v=c.join('')
console.log(v);
str+=v+' ';
// console.log(c);
let f=d.splice(n,d.length);
d.unshift(f.join(''));
// let k=d.join('');
// console.log(k);
console.log(f.join(''));
str+=f;
console.log(str);
//output: llohe rldwo.