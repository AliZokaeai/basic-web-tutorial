const choices = ["rock", "paper", "scissors"];

const playerDisplay = document.getElementById("palyerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
let winWords = "You Win...! yeh!";
let loseWords = "You lost...! Try Again";
let tieWords = "It's a tie! try Again";
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
      breack;
    case loseWords:
      resultDisplay.classList.remove("tieWords");
      resultDisplay.classList.remove("winWords");
      resultDisplay.classList.add("loseWords");
      breack;
    case tieWords:
      resultDisplay.classList.remove("loseWords");
      resultDisplay.classList.remove("winWords");
      resultDisplay.classList.add("tieWords");
      breack;
  }
}
