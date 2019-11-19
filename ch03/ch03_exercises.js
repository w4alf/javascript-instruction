

//function to return a min value
console.log(min(1088,88))

function min(x,y) {

    return Math.min(x,y);

}


//recursion function

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

let x = prompt("enter a positive number");
console.log(isEven(x));

function isEven (x) {

    if( x%2== 0) {
        return true;
    } else if (x%2 == 1){
        return false;

    } else if (x<0) {
        return console.log("only positive numbers please")
    } else {
        return isEven(x-2);
    }



}

