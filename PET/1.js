let a=20;
let sum=0;
for(i=1;i<=a;i++){
 if(i%2===0){
    
    // console.log(i); 
    sum+=i;
    
}

}
console.log(sum);




let a1=20;
let sum1=0;

for(i=1;i<=a1;i++){
    if(i%3===0){
        sum1+=i;
        console.log(i);
    }
}



let teamScore=250;
let targetScore=300;
let overLeft=2;

if(teamScore>=targetScore){
    console.log("Teams wins by DL method");
}
else if(teamScore<targetScore && overLeft>0){
    console.log("Match to be continued");
}
else{
    console.log("Team loses by DL method");
}
