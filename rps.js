let playerScore = 0;
let computerScore = 0;

const playerIcon = document.getElementById("playerIcon");
const computerIcon = document.getElementById("computerIcon");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
const roundResult = document.getElementById("roundResult");
const roundExplanation = document.getElementById("roundExplanation");

const overlay = document.getElementById("gameOverlay");
const overlayTitle = document.querySelector("#gameOverlay h1");
const startBtn = document.getElementById("startBtn");

document.getElementById("rock").addEventListener("click", function () {
  playRound("rock");
});
document.getElementById("paper").addEventListener("click", function () {
  playRound("paper");
});
document.getElementById("scissors").addEventListener("click", function () {
  playRound("scissors");
});

startBtn.addEventListener("click", function () {
  overlay.style.display = "none";
  resetGame();
});

function playRound(playerChoice) {
  const computerChoice = getComputerChoice();

  playerIcon.textContent = getIcon(playerChoice);
  computerIcon.textContent = getIcon(computerChoice);

  if (playerChoice === computerChoice) {
    roundResult.textContent = "It's a draw!";
    roundExplanation.textContent = "";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    roundResult.textContent = "You win!";
    roundExplanation.textContent = `${playerChoice} beats ${computerChoice}`;

    playerScore++;
    playerScoreDisplay.textContent = playerScore;
  } else {
    roundResult.textContent = "Computer wins!";
    roundExplanation.textContent = `${computerChoice} beats ${playerChoice}`;

    computerScore++;
    computerScoreDisplay.textContent = computerScore;
  }

  if (playerScore === 5 || computerScore === 5) {
    overlayTitle.textContent =
      playerScore === 5 ? "Player Won!" : "Computer Won!";
    startBtn.textContent = "START NEW GAME";
    overlay.style.display = "flex";
  }
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function getIcon(choice) {
  if (choice === "rock") return "✊";
  if (choice === "paper") return "✋";
  if (choice === "scissors") return "✌";
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreDisplay.textContent = "0";
  computerScoreDisplay.textContent = "0";
  playerIcon.textContent = "?";
  computerIcon.textContent = "?";
  roundResult.textContent = "Let's play!";
  roundExplanation.textContent = "";
}
