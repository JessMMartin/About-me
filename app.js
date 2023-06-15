"use strict";

alert("⭐Welcome to my website⭐");

let dino = prompt("What is your favourite dinosaur?🦕")
    console.log(dino);
    alert("Nice, mine is Allosaurus!🦖")

function foodName(){
    let foodName = prompt("Is Gazpacho a Spanish dish? Please answer yes or no only" +"(yes or no)").toLowerCase();
    if (foodName.toLowerCase() === "yes") {
       alert("Yes, that's right!")
    }else if (foodName.toLowerCase() === "no") {
        alert("Actually, it is a cold vegetable spanish soup.🥣")
    }else {
        alert("Please enter 'yes' or 'no'");
    }; 

}
    foodName()

const number = Math.floor(Math.random() * 10 + 1);
console.log(number);

for (let i = 2; i >= 0; i--) {
  let guesses = i + 1;

  let guess = prompt("Guess a number between 1 and 10! you have " + guesses + " attempts");

  const guessNum = parseInt(guess);

  if (guessNum === number) {
    alert("🥳 You win! 🎉");
    break;
  } else if (guessNum < number) {
    alert("too low");
  } else if (guessNum > number) {
    alert("too high");
  }

  if (i === 0) {
    alert("The correct number was " + number);
    break;
  }
}

function dogBreed(){
    let dogBreed = prompt("What breed is my dog?").toLowerCase();
    if (dogBreed.toLowerCase() === "Staffordshire Bull Terrier") {
       alert("Yes, she is")
    }else if (dogBreed.toLowerCase() === "no") {
        alert("Bebe is a Staffordshire Bull Terrier")
    }else {
        alert("Please enter a dog breed.");
    }; 

}
    dogBreed()