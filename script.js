(function () {
  // variables
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
  let player1Score = 0,
    player2Score = 0;
  const insertPlayer1Name = prompt("Player1 name");
  const insertPlayer2Name = prompt("Player2 name");

  function checkPreviousResults() {
    // Check if there are previous game results in local storage
    const storedPlayer1Score = localStorage.getItem("player1Score");
    const storedPlayer2Score = localStorage.getItem("player2Score");
    const winner = localStorage.getItem("winner");

    // If there are stored results, update the game state
    if (storedPlayer1Score && storedPlayer2Score && winner) {
      player1Score = parseInt(storedPlayer1Score);
      player2Score = parseInt(storedPlayer2Score);
      totalScorePlayer1.textContent = player1Score;
      totalScorePlayer2.textContent = player2Score;
      disableGame();
      alert(`Previous winner: ${winner}`);
    }
    // ... rest of your existing code ..
  }

  // functions
  function getPlayerName() {
    player1Name.textContent = insertPlayer1Name;
    player2Name.textContent = insertPlayer2Name;
  }
  getPlayerName();

  function rollTheDice(dice, playerScore) {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    dice.innerHTML = randomNumber;
    playerScore += randomNumber;
    return playerScore;
  }

  function disableGame() {
    button1.classList.add("disabled-button");
    button2.classList.add("disabled-button");
    showNewGameButton();
  }

  function showNewGameButton() {
    reset.style.visibility = "visible";
  }

  // event listeners
  button1.addEventListener("click", function () {
    if (button1.classList.contains("disabled-button")) {
      return;
    } else {
      player1Score = rollTheDice(kockica1, player1Score);
      totalScorePlayer1.textContent = player1Score;
      button1.classList.add("disabled-button");
      button2.classList.remove("disabled-button");
    }
    if (player1Score >= 20) {
      alert("Player 1 won");
      disableGame();
      localStorage.setItem("Player1Score", player1Score);
      localStorage.setItem("Winner", "Player1");
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
    if (player2Score >= 20) {
      alert("Player 2 won");
      disableGame();
      localStorage.setItem("Player2Score", player2Score);
      localStorage.setItem("Winner", "Player2");
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
})();
