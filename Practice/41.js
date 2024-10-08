let st="hello world";
let b=st.split(" ");
console.log(b);
let after1=[];
let after2=[];
after1.push(b[0]);
after2.push(b[1]);
let a=after1[0];
let x=a.split('')
console.log(x);
let c=after2[0];
console.log(c.split(''));

let g=x.splice(2,4);
console.log(g);
let z=g.join('');
console.log(z);

