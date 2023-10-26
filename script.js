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
    button1.classList.add("disabled-button");
    button2.classList.remove("disabled-button");
  }
  if (player1Score >= 10) {
    alert("Player 1 won");
    disableGame();
  }
});

button2.addEventListener("click", function () {
  if (button2.classList.contains("disabled-button")) {
    return;
  } else {
    player2Score = rollTheDice(kockica2, player2Score);
    totalScorePlayer2.textContent = player2Score;
    button2.classList.add("disabled-button");
    button1.classList.remove("disabled-button");
  }
  if (player2Score >= 10) {
    alert("Player 2 won");
    disableGame();
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
  reset.style.visibility = "hidden";
  button1.classList.remove("disabled-button");
});



function disableGame() {
  button1.classList.add("disabled-button");
  button2.classList.add("disabled-button");
  showNewGameButton();
}

function showNewGameButton() {
  reset.style.visibility = "visible";
}
