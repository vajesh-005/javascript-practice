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
    console.log("Team loses by DL method")
}
