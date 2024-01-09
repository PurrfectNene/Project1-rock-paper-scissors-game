window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const possibleChoices = [
    document.getElementById("user-scissors"),
    document.getElementById("user-paper"),
    document.getElementById("user-rock"),
  ];
  let game;

  startButton.addEventListener("click", function () {
    game = new Game();
    game.startGame();
  });

  possibleChoices[0].addEventListener("click", playScissors);
  possibleChoices[1].addEventListener("click", playPaper);
  possibleChoices[2].addEventListener("click", playRock);

  function playScissors() {
    // game.gamePlay("scissors");
    game.playRound("scissors");
  }

  function playPaper() {
    // game.gamePlay("paper");
    game.playRound("paper");
  }

  function playRock() {
    // game.gamePlay("rock");
    game.playRound("rock");
  }

  restartButton.addEventListener("click", () => {
    location.reload();
    console.log();
  });
};
