class Game {
  constructor() {
    this.gameIntro = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.possibleChoices= ["scissors", "paper", "rock"]
  }

  startGame() {
    this.gameIntro.style.display = "none";
    this.gameScreen.style.display = "block";
    this.gameIntro.style.zIndex = "1";
    this.gameScreen.style.zIndex = "2";

  playerChoice(choice) {
    if (choice === "scissors") {
        const choicesLeft = [document.getElementById("user-paper"), document.getElementById("user-rock")]
        choicesLeft[0].style.opacity  = 0//note: turn 1 for the value to show
        choicesLeft[1].style.opacity = 0//note: turn 1
    }
    else if (choice === "paper"){
        const choicesLeft = [document.getElementById("user-scissors"), document.getElementById("user-rock")]
        choicesLeft[0].style.opacity  = 0
        choicesLeft[1].style.opacity = 0
    }
    else if (choice === "rock"){
        const choicesLeft = [document.getElementById("user-scissors"), document.getElementById("user-paper")]
        choicesLeft[0].style.opacity  = 0
        choicesLeft[1].style.opacity = 0
    }


    this.cpuRandom()
  }

  cpuRandom() {
    setTimeout(() => {
    const randomChoice = Math.floor(Math.random()*this.possibleChoices.length)
    const cpuChoice = this.possibleChoices[randomChoice]
    const cpuMoveImg = document.getElementById("cpu-move")

    
    if (cpuChoice === "scissors"){
        cpuMoveImg.src = "./images/scissors.png"
        cpuMoveImg.alt = "scissors"
    }
    else if (cpuChoice === "paper"){
        cpuMoveImg.src = "./images/paper.png"
        cpuMoveImg.alt = "paper"
    }
    else if (cpuChoice === "rock"){
        cpuMoveImg.src = "./images/rock.png"
        cpuMoveImg.alt = "rock"
    }
    }, 2000);

  }

  gamePlay() {

  }

  endGame(outcome) {
    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = "block";
    this.gameScreen.style.zIndex = "0";
    this.gameEndScreen.style.zIndex = "1";

    if (outcome === "win") {
      const myOutcome = document.getElementById("my-outcome");
      myOutcome.src = "./images/win.png";
      myOutcome.alt = "winner";

      const pikaWinner = document.getElementById("pika-endimage");
      pikaWinner.src = "./images/pika-win.png";
      pikaWinner.alt = "pika winner";
    } else if (outcome === "loose") {
      const myOutcome = document.getElementById("my-outcome");
      myOutcome.src = "./images/game-over.png";
      myOutcome.alt = "game over";

      const pikaLoser = document.getElementById("pika-endimage");
      pikaLoser.src = "./images/pika-loose.png";
      pikaLoser.alt = "pika loser";
    } else if (outcome === "tie") {
      const myOutcome = document.getElementById("my-outcome");
      myOutcome.src = "./images/tie.png";
      myOutcome.alt = "tie";
    }
  }
}
