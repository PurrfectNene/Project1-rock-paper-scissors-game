window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
    const gameWin = document.getElementById("game-win") //to cancel
    const gameOver = document.getElementById("game-over") //to cancel
    const gameTie = document.getElementById("game-tie")//to cancel
    let game
  
    startButton.addEventListener("click", function () {
      game = new Game()
      game.startGame()
    });

    

    
    gameWin.addEventListener("click", function () {
      game.endGame("win")
    })//to cancel

    gameOver.addEventListener("click", function () {
      game.endGame("loose")
    })//to cancel

    gameTie.addEventListener("click", function () {
      game.endGame("tie")
    })//to cancel

    restartButton.addEventListener('click',()=>{
      location.reload()
      console.log()
    })
}
  
