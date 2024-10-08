let array=[];
function calc(n1,n2){
    for(let i=n1;i<=n2;i++){
        if(i%2===0){
            array.push(i);
        }
    }
    for(let i=n1;i<=n2;i++){
        if(i%2!==0){
            array.push(i);
        }
    }
}
calc(1,10);
console.log(array);