// varijable
const kockica1 = document.querySelector(".kockica1");
const kockica2 = document.querySelector(".kockica2");
const reset = document.querySelector(".reset");
let totalScorePlayer1 = document.querySelector(".totalScorePlayer1");
let totalScorePlayer2 = document.querySelector(".totalScorePlayer2");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
let player1Name = document.querySelector("#player1");
let player2Name = document.querySelector("#player2");
//////////////////////////
let player1dice, player2dice;
let player1Score = 0,
  player2Score = 0;
// Lista
const lista = [kockica1, kockica2, totalScorePlayer1, totalScorePlayer2];

// funkcije

function rollTheDice(dice, playerScore) {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  dice.innerHTML = randomNumber;
  playerScore += randomNumber;
  return playerScore;
}

button1.addEventListener("click", function () {
  if (button1.classList.contains("disabled-button")) {
    return;
  } else {
    player1Score = rollTheDice(kockica1, player1Score);
    totalScorePlayer1.textContent = player1Score;
  }
});

button2.addEventListener("click", function () {
  if (button2.classList.contains("disabled-button")) {
    return;
  } else {
    player2Score = rollTheDice(kockica2, player2Score);
    totalScorePlayer2.textContent = player2Score;
    console.log("radi");
  }
});

reset.addEventListener("click", function () {
  totalScorePlayer1.textContent =
    totalScorePlayer2.textContent =
    totalScorePlayer2 =
    player1Score =
    player2Score =
    kockica1.textContent =
    kockica2.textContent =
      0;
});

function newGame() {
  player1Name = player1Name.textContent = prompt("Insert player1 name");
  player2Name = player2Name.textContent = prompt("Insert player2 name");
}

// newGame()
