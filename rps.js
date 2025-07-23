document.getElementById("startBtn").addEventListener("click", function () {
  document.getElementById("gameOverlay").style.display = "none";
});

let playerScore = 0;
let computerScore = 0;

let playerChoice;
let computerChoice;
3;

//kako da znam sta kompjuter igra?
//napravi array choices ["rock","paper", "scissors"]
//nakon sto igra igrac:

function proveriBroj(broj) {
  if (broj > 10) {
    console.log("Broj je veliki");
  } else {
    console.log("Broj je mali");
  }
}

proveriBroj(122); // Ispisaće: Broj je veliki
proveriBroj(5); // Ispisaće: Broj je mali
