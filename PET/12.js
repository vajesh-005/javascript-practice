 

 function classifynumber(n){
    if(n%3===0 && n%5===0){
        console.log("Divisible by 3 & 5");
    }
    else if(n%3===0){
        console.log("Divisible by 3");
    }
    else if(n%5===0){
        console.log("Divisible by 5 ");
    }
    else{
        console.log("Not Divisible")
    }

 }
 classifynumber(45);