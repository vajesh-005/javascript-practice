// sum of digits
let num=12345;
let split=num.toString().split("");
console.log(split);
let mt=0;
for(let i=0;i<split.length;i++){
    mt+=Number(split[i]);
}
console.log(mt);

