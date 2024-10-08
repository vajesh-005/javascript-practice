// Input: arr = [1, 2, 3, 4, 5], k = 2
// Output: [4, 5, 1, 2, 3]


let arr=[1,2,3,4,5];
for(let i=3;i<arr.length;i++){
    let a=arr.pop();
    arr.unshift(a);
}
console.log(arr);