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
      console.log("It's a tie");
    } else if (playerSelection == "rock" && computerSelection == "scissors"
      || playerSelection == "scissors" && computerSelection == "paper"
      || playerSelection == "paper" && computerSelection == "rock"){
      return ("You win! " + playerSelection + " beats " + computerSelection);
      //
    } else {
      return ("You lose! " + computerSelection + " beats " + playerSelection );

    }
  }

let playerSelection = "ROCK";
playerSelection = playerSelection.toLowerCase();


const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
