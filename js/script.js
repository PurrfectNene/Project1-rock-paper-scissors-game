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
    // possibleChoices[0].removeEventListener("click", removeClickScissors)
  })

  possibleChoices[1].addEventListener("click", function (){
    game.playerChoice ("paper")
    // possibleChoices[1].removeEventListener("click", removeClickPaper)
  })

  possibleChoices[2].addEventListener("click", function(){
    game.playerChoice("rock")
    // possibleChoices[2].removeEventListener("click", removeClickRock)
  })

  // function removeClickScissors (){
  //   game.playerChoice("scissors")
  //   possibleChoices[0].removeEventListener("click", removeClickScissors)
  // }
  
  // function removeClickPaper (){
  //   game.playerChoice("paper")
  //   possibleChoices[1].removeEventListener("click", removeClickPaper)
  // }

  // function removeClickRock (){
  //   game.playerChoice("rock")
  //   possibleChoices[2].removeEventListener("click", removeClickRock)
  // }



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
