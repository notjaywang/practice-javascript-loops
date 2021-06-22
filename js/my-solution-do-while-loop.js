const main = document.querySelector('main');
const randomNumber = getRandomNumber(10);
let guess;

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
  attempts++;
  guess = Number( prompt(`I am thinking of a number between 1 and 10. What is it?`) );
  if ( isNaN(guess) ) {
    alert(`What you have entered is not a number. Please enter a number and try again.`);
  } else if ( guess === randomNumber) {
    main.innerHTML = `<h1>You've guessed it! The correct number is ${guess}. You took ${attempts} attempt(s).</h1>`;
    break;
  } else if (attempts = 10 ) {
    main.innerHTML = `<h1>The number was ${randomNumber}. Better luck next time!</h1>`;
  }
} while ( attempts < 10 );