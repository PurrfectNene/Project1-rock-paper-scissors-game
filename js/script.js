window.onload = function () {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
    let game
  
  
    restartButton.addEventListener('click',()=>{
      location.reload()
    })
  
  
    startButton.addEventListener("click", function () {
        console.log("start game");
        game = new Game()
        game.startGame()
    });

}
  
