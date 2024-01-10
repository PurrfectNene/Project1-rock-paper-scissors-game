class Game {
  constructor() {
    this.gameIntro = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.roundImg = document.getElementById("round");
    this.nextRoundImg = document.getElementById("next-round");
    this.playerScoreLabel = document.getElementById("playerScore");
    this.cpuScoreLabel = document.getElementById("cpuScore");
    this.possibleChoices = ["scissors", "paper", "rock"];
    this.choices = [
      document.getElementById("user-scissors"),
      document.getElementById("user-paper"),
      document.getElementById("user-rock"),
    ];
    this.rounds = 3;
    this.results = [];
    this.currentRound = 0;
    this.userScore = 0;
    this.cpuScore = 0;

    this.initGame()
  }

  initGame() {
    this.choices[0].addEventListener("click", () => {
      this.playRound("scissors");
    });
    this.choices[1].addEventListener("click", () => {
      this.playRound("paper");
    });
    this.choices[2].addEventListener("click", () => {
      this.playRound("rock");
    })
  }

  startGame() {

    console.log("Started new game!")
    this.currentRound++
    console.log(this.currentRound);

    this.playerScoreLabel.textContent = `${this.userScore}`;
    this.cpuScoreLabel.textContent = `${this.cpuScore}`;

    this.gameIntro.style.display = "none";
    this.gameScreen.style.display = "block";
    this.gameIntro.style.zIndex = "1";
    this.gameScreen.style.zIndex = "2";

    this.choices[0].style.opacity = 1;
    this.choices[1].style.opacity = 1;
    this.choices[2].style.opacity = 1;

    // setTimeout(() => {
    //   const cpuMoveImg = document.getElementById("cpu-move");
    //   cpuMoveImg.src = "";
    //   cpuMoveImg.alt = "";
    //   console.log("hand hidden");
    // }, 2000);

    if(this.currentRound >=2){
      this.nextRoundImg.src = "./images/nextround.png"
      this.nextRoundImg.alt = "next round"
      this.nextRoundImg.style.opacity = 1
      setTimeout(() => {
        this.nextRoundImg.style.opacity = 0
      }, 1500);
      
      const cpuMoveImg = document.getElementById("cpu-move");
      cpuMoveImg.src = "";
      cpuMoveImg.alt = "";
      console.log("hand hidden");
    }

    
    let roundNumber = `round${this.currentRound}`

    this.roundImg.src = `./images/${roundNumber}.png`
    this.roundImg.alt = roundNumber
  }

  playerChoice(choice) {
    if (choice === "scissors") {
      this.choices[1].style.opacity = 0;
      this.choices[2].style.opacity = 0;
    } else if (choice === "paper") {
      this.choices[0].style.opacity = 0;
      this.choices[2].style.opacity = 0;
    } else if (choice === "rock") {
      this.choices[0].style.opacity = 0;
      this.choices[1].style.opacity = 0;
     
    }
  }

  cpuRandom() {
    const randomChoice = Math.floor(
      Math.random() * this.possibleChoices.length
    );
    const cpuChoice = this.possibleChoices[randomChoice];

    setTimeout(() => {
      const cpuMoveImg = document.getElementById("cpu-move");

      if (cpuChoice === "scissors") {
        cpuMoveImg.src = "./images/scissors.png";
        cpuMoveImg.alt = "scissors";
      } else if (cpuChoice === "paper") {
        cpuMoveImg.src = "./images/paper.png";
        cpuMoveImg.alt = "paper";
      } else if (cpuChoice === "rock") {
        cpuMoveImg.src = "./images/rock.png";
        cpuMoveImg.alt = "rock";
      }
    }, 1000);

    return cpuChoice;
  }

  playRound(choice) {
    this.playerChoice(choice);
    const cpuChoice = this.cpuRandom();

    if (choice === cpuChoice) {
      this.results.push("tie");
    } 
    else if (
      (choice === this.possibleChoices[0] &&
        cpuChoice === this.possibleChoices[1]) ||
      (choice === this.possibleChoices[1] &&
        cpuChoice === this.possibleChoices[2]) ||
      (choice === this.possibleChoices[2] &&
        cpuChoice === this.possibleChoices[0])
    ) { 
      this.results.push("win");
      this.userScore += 1;
    } 
    else {
      this.results.push("loose");
      this.cpuScore += 1;
    }

    console.log(this.results);

    setTimeout(() => {
      if(this.currentRound >= 3){
        this.checkOutcome()
      }
      else{
        this.startGame()
      }
    }, 3000);
  }

  checkOutcome(){
    if(this.userScore > this.cpuScore) {
      this.endGame("win");
    }
    else if(this.userScore === this.cpuScore){
      this.endGame("tie");
    }
    else {
      this.endGame("loose")
    }
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

      const psyduckTie = document.getElementById("pika-endimage");
      psyduckTie.src = "./images/tieImg.png";
      psyduckTie.alt = "psyduck confused tie";
    }
  }
}
