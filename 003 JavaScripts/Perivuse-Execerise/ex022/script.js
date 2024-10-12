const choices = ["rock", "paper", "scissors"];

const playerDisplay = document.getElementById("palyerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
let winWords = "You Win...! yeh!";
let loseWords = "You lost...! Try Again";
let tieWords = "It's a tie! try Again";

const playerScoreDisplay = document.getElementById("playerScoreDispaly");
const computerScoreDispaly = document.getElementById("computerScoreDispaly");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoise) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (playerChoise === computerChoice) {
    result = `${tieWords}`;
  } else {
    switch (playerChoise) {
      case "rock":
        result = computerChoice === "scissors" ? `${winWords}` : `${loseWords}`;
        break;
      case "paper":
        result = computerChoice === "rock" ? `${winWords}` : `${loseWords}`;
      case "scissors":
        result = computerChoice === "paper" ? `${winWords}` : `${loseWords}`;
    }
  }

  playerDisplay.textContent = `Player: ${playerChoise}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;
  resultDisplay.textContent = `Result: ${result}`;

  switch (result) {
    case winWords:
      resultDisplay.classList.remove("loseWords");
      resultDisplay.classList.remove("tieWords");
      resultDisplay.classList.add("winWords");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      breack;
    case loseWords:
      resultDisplay.classList.remove("tieWords");
      resultDisplay.classList.remove("winWords");
      resultDisplay.classList.add("loseWords");
      computerScore++;
      computerScoreDispaly.textContent = computerScore;
      breack;
    case tieWords:
      resultDisplay.classList.remove("loseWords");
      resultDisplay.classList.remove("winWords");
      resultDisplay.classList.add("tieWords");
      breack;
  }
}


//10:18:12