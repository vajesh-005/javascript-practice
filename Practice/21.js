// Given a string "Freshworks, Global Infocity, Perungudi, Chennai - 600096",
//  print the address on 4 different lines.

let a="Freshworks, Global Infocity, Perungudi, Chennai-600096";

let b=a.split(',');
console.log(b);

for(let i=0;i<b.length;i++){
    console.log(b[i]);
}