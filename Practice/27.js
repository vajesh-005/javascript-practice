let a="level";
let ans="";
let length=a.length;
for(let i=length-1;i>=0;i--){
    let c=a[i];
    ans+=c;
}
if(ans==a){
    console.log("it is a palindrome");
}
else{
    console.log("not");
}