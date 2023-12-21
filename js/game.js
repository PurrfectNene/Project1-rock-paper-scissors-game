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
        //game end when tie/ loose at least 2 rounds/ win at least 2 round
    }

    endGame(){
        //remove player
        //show endgame screen and hide game-intro
    }
}

