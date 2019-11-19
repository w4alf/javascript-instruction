let letters = ["a", "b", "c", "d", "e"];
console.log(letters);

for (let l of letters) {
 console.log(l);

}


let l1 = letters.slice(0,2);

console.log(l1);
let l2 = letters.slice(3);

console.log(l2);
let l3 = l1.concat(l2);
console.log("l1 :" + l1);
console.log("l2 " + l2);
console.log("l3 " + l3);


let nbrs = [1,5,3,7,9,13];
let sum =0;

for (let i=0; i<nbrs.length;i++) {
    sum += nbrs[i];

}
console.log(sum);

console.log(sumIt(2,4,6,8));
console.log(sumIt(5,6,7));
console.log(sumIt("a","b"));
//sum function


function sumIt(...n) {
    let sum = 0;
    for (let nbr of n){
        sum += nbr;
    }
    return sum;
}
