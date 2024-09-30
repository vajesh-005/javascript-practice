// An airplane altitude currently is 1000ft and its altitude reduces each second by 10ft.
//  Write a program which will print “Flight arrived” when the airplane altitude reaches 0ft.


let a=1000;
let i=0;
while(i<=a){
    if(a>0){
        console.log(`Altitude:${a}`);
    }
    else{
        console.log("Landed")
    }
    a=a-10;
}


