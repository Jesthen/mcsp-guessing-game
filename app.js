function guessOnce() {
  //result changes based on players decision
  let validAnswer = Math.floor(Math.random() * 100);
  console.log(validAnswer);
  let playerInput = prompt("Do you want to play the guessing game?");
  if (playerInput === "yes") {
    //created variable guess assigned it to prompt so we can use it later
    let guess = prompt("guess the number between 0-100");
    console.log(guess);
    //create variable that takes in an empty array
    let guess_history = [];
    //iterate til guess matches validAnswer
    //give player either an alert or prompt based on their guess
    //push history into empty array guess_history, when correct notify player by saying correct followed by their previous guesses
    //ask player if they would like to play again using confirm, if so, invoke the function
    //if player decides not to confirm, alert thank you for playing, good bye
    while (guess !== validAnswer) {
      if (guess < validAnswer) {
        guess = prompt("mmm too low try again");
        guess_history.push(guess);
      } else if (guess > validAnswer) {
        guess = prompt("too high try again");
        guess_history.push(guess);
      } else if (guess == validAnswer) {
        guess_history.push(guess);
        let playAgain = confirm("Correct! your previous guesses were" + " " + guess_history + " " + "Would you like to play again?");
        if (playAgain) {
          guessOnce();
        } else {
          alert("Thank you for playing, Good Bye.");
          //stops the instruction of alert
          break;
        }
      }
    }
  } else if (playerInput === "no") {
    alert("What a bummer");
  }
}

guessOnce();
