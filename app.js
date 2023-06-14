"use strict";

alert("Welcome to my website");

let dino = prompt("What is your favourite dinosaur?")
    console.log(dino);
    alert("Nice, mine is Allosaurus!")

function foodName(){
    let foodName = prompt("Is Gazpacho a Spanish dish? Please answer yes or no only" +"(yes or no)").toLowerCase();
    if (foodName.toLowerCase() === "yes") {
       alert("Yes, that's right")
    }else if (foodName.toLowerCase() === "no") {
        alert("Actually, it is a cold vegetable spanish soup")
    }else {
        alert("Please enter 'yes' or 'no'");
    }; 

}
    foodName()
