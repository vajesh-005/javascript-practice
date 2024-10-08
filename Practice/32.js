let n1=0;
let n2=1;
let sum=0;
let str="";
for(let i=1;i<=10;i++){
    str+=n1+" ";
    sum=n1+n2;
    n1=n2;
    n2=sum;
}
console.log(str);