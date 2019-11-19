//chapter 02 homework Javascript book

triangle ="#";

for (a=0; a<6;a++) {



    console.log(triangle);
	triangle += "#";
}


// FizzBuzz

for (a=1; a<101;a++) {

if (a%5==0&&!(a%3==0)){
	
	console.log("Buzz");

}else if (a%5==0&&a%3==0){
	
	console.log("FizzBuzz");

}else if(a%3==0){
	
	console.log("Fizz");
	
}

else {
	console.log(a);
}

}



// ChessBoard

let size = 8;
let string ="";


for (a=0;a<(size);a++) {
	
		string ="";
		
	
	for (j=0;j<(size);j++) {
		
		
			string += "#";
	
	}
	
	if (a%2==0) {
		
		string = " " + string;
	}
	
	console.log(string + "\n");	
	
}


// TEST SCORE APP FROM JAVA CHAPTER 2

  

	let testScore = [25,55,78,90,90,101,999];
	let scoreCount = 0;
	let scoreTotal = 0;
	let averageScore = 0;
	let message="";
	
	for (i=0;i<testScore.length;i++) {

			//let pct = (Math.floor(Math.Random()*41))+60;
                
            if (testScore[i] > 100 && testScore[i] !=999) {
					
					console.log("This entry is invalid \n ");
            }
           
                        
            // accumulate score count and score total
            if (testScore[i] <= 100) {
				
				console.log(testScore[i] + "\n");
                scoreCount = scoreCount + 1;
                scoreTotal = scoreTotal + testScore[i];
            }
            
            
        }

        if (scoreCount > 0) {
        	
        	// display the score count, score total, and average score
        	averageScore =  scoreTotal / scoreCount;
        } 
        
        message = "\n"
                + "Score count:   " + scoreCount + "\n"
                + "Score total:   " + scoreTotal + "\n"
                + "Average score: " + averageScore + "\n";
        
		console.log(message);

















