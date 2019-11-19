
//Exercise sum of Range

function range(start, end){
    let numArray =  [];
    for (let i = start; i<(end +1);i++) {
       
        numArray[i] = i;
    }
    
    return numArray.slice(start, end+1);
}

//console.log(range(0,5));


function sum(array){
    
    let total = 0;

    for(let j = 0; j<array.length;j++) {
        total += array[j];
    }

    return total;
}

console.log(sum(range(1,10)));

