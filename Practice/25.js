// let num=69;
// let isPrime=true;

// if(num<=1){
//     isPrime=false;
// }
// else{
//     for(let i=2;i<=Math.sqrt(num);i++){
//         if(num%i===0){
//             isPrime=false;
//             break;
//         }
//     }
// }
// if(isPrime){
//     console.log(`${num} is a prime number`)
// }
// else{
//     console.log(`${num} is not a prime number`)
// }







let n=49;
let isPrime=true;

if(n<=1){
    isPrime=false;
}
else{
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i===0){
            isPrime=false;
            break;
        }
    }
    
}
if(isPrime){
    console.log("Prime");
}
else{
    console.log("Not a prime");
}














