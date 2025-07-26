document.getElementById("startBtn").addEventListener("click", function () {
  document.getElementById("gameOverlay").style.display = "none";
});

let playerScore = 0;
let computerScore = 0;

let playerChoice;
let computerChoice;

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

computerSign = getComputerChoice();

console.log(`Kompjuter je igrao ${computerSign}`);

////////// pravila za igru:

//belezi se izbor playera
//komp. generise nasumican izbor
//uporedimo oba izbora
//ako su isti, rez = neresen
//ako igrac pobedjuje, dodaje ++ se jedan poen
//ako komp. pobedjuje dodaje se ++ poen njemu
//menja se rezultat i na ekranu(curent score)
//ko prvi dodje do 5 poena, pobednik, igra se vraca na pocetak.
