const main = document.querySelector('main');
const randomNumber = getRandomNumber(10);
let guess;
let message;

// Keep track of the number of guess attempts. 

let attempts = 0;


function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

// TODO: Use a loop to create a number guessing game
//  1) Ask the user to enter a number and assign that value to the `guess` variable
//  2) End the loop when the user's guess matches the random number
//  3) Display a message letting the user know they guessed the number

do {
  guess = prompt(`I am thinking of a number between 1 and 10. What is it?`);
  attempts++;
  // Terminate loop if the user guesses the number
  if ( randomNumber === parseInt(guess) ) {
    message = `You guessed the number! It was ${randomNumber}. It took ${attempts} attempt(s).`;
    break; 
  } else {
    message = `The number was ${randomNumber}. Better luck next time!`;
  }
} while ( attempts < 10 );

main.innerHTML = `<h1>${message}</h1>`;