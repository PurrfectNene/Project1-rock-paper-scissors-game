class Game {
    constructor(){
        this.gameIntro = document.getElementById("game-intro");
        this.gameScreen = document.getElementById("game-screen");
        this.gameEndScreen = document.getElementById("game-end");
    }

    startGame(){
        this.gameIntro.style.display = 'none'
        this.gameScreen.style.display = 'block'
        this.gameIntro.style.zIndex = '1'
        this.gameScreen.style.zIndex = '2'
    }

    gamePlay(){

    }

    endGame(outcome){
        this.gameScreen.style.display = 'none'
        this.gameEndScreen.style.display = 'block'
        this.gameScreen.style.zIndex = '0'
        this.gameEndScreen.style.zIndex = '1'

        if(outcome === "win"){
            const myOutcome = document.getElementById("my-outcome")
            myOutcome.src = "./images/win.png"
            myOutcome.alt = "winner"

            const pikaWinner = document.getElementById("pika-endimage")
            pikaWinner.src = "./images/pika-win.png"
            pikaWinner.alt = "pikawinner"
        }

        else if(outcome === "loose"){
            const myOutcome = document.getElementById("my-outcome")
            myOutcome.src = "./images/game-over.png"
            myOutcome.alt = "game over"
        }

        else if(outcome === "tie"){
            const myOutcome = document.getElementById("my-outcome")
            myOutcome.src = "./images/tie.png"
            myOutcome.alt = "tie"
        }
    }
}

