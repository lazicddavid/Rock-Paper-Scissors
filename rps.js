document.getElementById("startBtn").addEventListener("click", function () {
  document.getElementById("gameOverlay").style.display = "none";
});

let playerScore = 0;
let computerScore = 0;

let playerChoice;
let computerSign;

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

// pozivamo funkciju i rezultat smeštamo u computerSign
computerSign = getComputerChoice();

console.log(`Kompjuter je igrao ${computerSign}`);

//kako da znam sta kompjuter igra?
//napravi array choices ["rock","paper", "scissors"]
//nakon sto igra igrac:

//kako da znam sta kompjuter igra?
//napravi array choices ["rock","paper", "scissors"]
//nakon sto igra igrac:
