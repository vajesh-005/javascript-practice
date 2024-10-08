

function parameter(n){
    let a=n.toLowerCase();
    if(a=="a"){
        return true;
    }
    else if(n=="d"||n=="e"||n=="f"){ 
        return false;
    }
    else{
        return 1;
    }
}
console.log(parameter("A"));      



