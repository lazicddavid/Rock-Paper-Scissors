/*////////// pravila za igru:

//belezi se izbor playera
//komp. generise nasumican izbor
//uporedimo oba izbora
//ako su isti, rez = neresen
//ako igrac pobedjuje, dodaje ++ se jedan poen
//ako komp. pobedjuje dodaje se ++ poen njemu
//menja se rezultat i na ekranu(curent score)
//ko prvi dodje do 5 poena, pobednik, igra se vraca na pocetak.
// */

document.getElementById("startBtn").addEventListener("click", function () {
  document.getElementById("gameOverlay").style.display = "none";
});

let playerScore = 0;
let computerScore = 0;
let playerChoice = "";
let computerChoice = "";

const playerScoreEl = document.getElementById("playerScore");
const computerScoreEl = document.getElementById("computerScore");

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
}

function playRound(choice) {
  playerChoice = choice;
  computerChoice = getComputerChoice();

  console.log("Player chose:", playerChoice);
  console.log("Computer chose:", computerChoice);

  // Set player symbol
  if (playerChoice === "rock") {
    playerIcon.textContent = "✊";
  } else if (playerChoice === "paper") {
    playerIcon.textContent = "✋";
  } else if (playerChoice === "scissors") {
    playerIcon.textContent = "✌️";
  }

  if (computerChoice === "rock") {
    computerIcon.textContent = "✊";
  } else if (computerChoice === "paper") {
    computerIcon.textContent = "✋";
  } else if (computerChoice === "scissors") {
    computerIcon.textContent = "✌️";
  }

  if (playerChoice === computerChoice) {
    console.log("It is draw!");
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("Player wins this round");
    playerScore++;
  } else {
    console.log("Computer wins this round!");
    computerScore++;
  }

  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;

  if (playerScore === 5) {
    alert("Player wins  game!");
    resetGame();
  } else if (computerScore === 5) {
    alert("Computer wins  game!");
    resetGame();
  }
}

const playerIcon = document.querySelector("#playerIcon");
const computerIcon = document.querySelector("#computerIcon");

document.getElementById("rock").addEventListener("click", function () {
  playRound("rock");
});

document.getElementById("paper").addEventListener("click", function () {
  playRound("paper");
});

document.getElementById("scissors").addEventListener("click", function () {
  playRound("scissors");
});

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
  playerIcon.textContent = "?";
  computerIcon.textContent = "?";
}

document.getElementById("playerIcon").textContent = "✋";
