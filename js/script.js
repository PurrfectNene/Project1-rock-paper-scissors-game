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

  restartButton.addEventListener("click", () => {
    location.reload();
  });
};
