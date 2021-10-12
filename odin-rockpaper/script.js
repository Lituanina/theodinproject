let playerScore = 0;
let computerScore = 0;



function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function computerPlay() {

    let computerChoice = getRandomInt(3);
    let choice = ["rock", "scissors", "paper"]

    return choice[computerChoice];

}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return ("It's a tie");
    } else if (playerSelection == "rock" && computerSelection == "scissors"
      || playerSelection == "scissors" && computerSelection == "paper"
      || playerSelection == "paper" && computerSelection == "rock"){
      playerScore++;
      return ("You win! " + playerSelection + " beats " + computerSelection);
      //
    } else {
      computerScore++;
      return ("You lose! " + computerSelection + " beats " + playerSelection );

    }
  }


function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Please choose your weapon", "rock");
    playerSelection = playerSelection.toLowerCase();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    console.log("Computer: " + computerScore + " Player: " + playerScore);
  } if (computerScore === playerScore) {
    return ("Hey! It's a tie.");
  } else if (computerScore > playerScore) {
    return ("What a shame! The computer won!");
  } else {
    return ("YOU WON!")
  }
}


console.log(game());
