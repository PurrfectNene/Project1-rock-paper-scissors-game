window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const gameWin = document.getElementById("game-win"); //to cancel
  const gameOver = document.getElementById("game-over"); //to cancel
  const gameTie = document.getElementById("game-tie"); //to cancel
  const possibleChoices = [document.getElementById("user-scissors"), document.getElementById("user-paper"), document.getElementById("user-rock")]
  let game;

  startButton.addEventListener("click", function () {
    game = new Game();
    game.startGame();
  });

  possibleChoices[0].addEventListener("click", function (){
    game.playerChoice("scissors")
    //remove event listener
  })

  possibleChoices[1].addEventListener("click", function (){
    game.playerChoice ("paper")
    //remove event listener
  })

  possibleChoices[2].addEventListener("click", function(){
    game.playerChoice("rock")
    //remove event listener
  })

  



  gameWin.addEventListener("click", function () {
    game.endGame("win");
  }); //to cancel

  gameOver.addEventListener("click", function () {
    game.endGame("loose");
  }); //to cancel

  gameTie.addEventListener("click", function () {
    game.endGame("tie");
  }); //to cancel

  restartButton.addEventListener("click", () => {
    location.reload();
    console.log();
  });
};
