// Based on the flight’s destination, direct the airplane to a specific runway.
//  Use a switch statement to assign the runway depending on the destination entered by the user.



function direction(n){
    switch(n){
        case "India":
            console.log("north");
            break;
        case "Australia":
            console.log("South");
            break;
        case "germany":
            console.log("East");
            break;
        case "Argentina":
            console.log("West");
    }
}
direction("Argentina")