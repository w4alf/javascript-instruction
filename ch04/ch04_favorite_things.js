let readline = require('readline-sync');

console.log("Welcome to the favorite things app, V1");
//initialize an empty array to store favorites
let favorites = [];

let choice ="y";
while (choice == "y"){
    console.log("===Add a favorite thing===");
    let id_in =readline.questionInt("Favorite Id:  ");
    let thing_in =readline.question("Favorite thing:  ");
    let why_in =readline.question("Why is it a favorite?:  ");

    let favorite = {
        id: id_in,
        thing: thing_in,
        why: why_in,
    };
    favorites.push(favorite);

    choice =readline.question("Add another favorite?:  ");
}

console.log("My list of favorites:  ");

for (let f of favorites){
    //console.log(`I like ${f.thing} because ${f.why}.`);
    displayFavorite(f);
}


// get that favorite from the list and display that matches the id entered
//create a function for the display

//prompt user for id to retrieve
let idRetrieved =readline.questionInt("Enter ID to retrieve?:  ");

for (let f of favorites){

    if (f.id==idRetrieved){
        displayFavorite(f);
    }
   
    
}


console.log("bye!")

function displayFavorite (f){

    console.log(`I like ${f.id} - ${f.thing} because ${f.why}.`);

}