let field = document.querySelectorAll(".game-filed");
let reset = document.querySelector(".reset-game");
let playerOnTurn = 'url("images/cross.png")';
var move = document.querySelector("h2").innerHTML;
let playerWhoWon = "X";
let disableButtons = document.getElementsByClassName(".game-filed").disabled;
someoneWins = false;

function checkWin() {
        if ((field[0].style.backgroundImage === field[1].style.backgroundImage && field[0].style.backgroundImage === field[2].style.backgroundImage) && field[0].style.backgroundImage !== "") {
            document.querySelector("h1").innerText = playerWhoWon + " WINS";
            document.querySelector("h2").innerHTML = "Thanks for playing";
            return true;
        } else if ((field[3].style.backgroundImage === field[4].style.backgroundImage && field[3].style.backgroundImage === field[5].style.backgroundImage) && field[3].style.backgroundImage !== "") {
            document.querySelector("h1").innerText = playerWhoWon + " WINS";
            document.querySelector("h2").innerHTML = "Thanks for playing";
            return true;
        } else if ((field[6].style.backgroundImage === field[7].style.backgroundImage && field[6].style.backgroundImage === field[8].style.backgroundImage) && field[6].style.backgroundImage !== "") {
            document.querySelector("h1").innerText = playerWhoWon + " WINS";
            document.querySelector("h2").innerHTML = "Thanks for playing";
            return true;
        } else if ((field[0].style.backgroundImage === field[3].style.backgroundImage && field[0].style.backgroundImage === field[6].style.backgroundImage) && field[0].style.backgroundImage !== "") {
            document.querySelector("h1").innerText = playerWhoWon + " WINS";
            document.querySelector("h2").innerHTML = "Thanks for playing";
            return true;
        } else if ((field[1].style.backgroundImage === field[4].style.backgroundImage && field[1].style.backgroundImage === field[7].style.backgroundImage) && field[1].style.backgroundImage !== "") {
            document.querySelector("h1").innerText = playerWhoWon + " WINS";
            document.querySelector("h2").innerHTML = "Thanks for playing";
            return true;
        } else if ((field[2].style.backgroundImage === field[5].style.backgroundImage && field[2].style.backgroundImage === field[8].style.backgroundImage) && field[2].style.backgroundImage !== "") {
            document.querySelector("h1").innerText = playerWhoWon + " WINS";
            document.querySelector("h2").innerHTML = "Thanks for playing";
            return true;
        } else if ((field[0].style.backgroundImage === field[4].style.backgroundImage && field[0].style.backgroundImage === field[8].style.backgroundImage) && field[0].style.backgroundImage !== "") {
            document.querySelector("h1").innerText = playerWhoWon + " WINS";
            document.querySelector("h2").innerHTML = "Thanks for playing";
            return true;
        } else if ((field[2].style.backgroundImage === field[4].style.backgroundImage && field[2].style.backgroundImage === field[6].style.backgroundImage) && field[2].style.backgroundImage !== "") {
            document.querySelector("h1").innerText = playerWhoWon + " WINS";
            document.querySelector("h2").innerHTML = "Thanks for playing";
            return true;
        } else if(field[0].style.backgroundImage !== "" && field[1].style.backgroundImage !== "" && field[2].style.backgroundImage !== "" &&
            field[3].style.backgroundImage !== "" && field[4].style.backgroundImage !== "" && field[5].style.backgroundImage !== "" &&
            field[6].style.backgroundImage !== "" && field[7].style.backgroundImage !== "" && field[8].style.backgroundImage !== "") {
            document.querySelector("h1").innerText = "DRAW";
            document.querySelector("h2").innerHTML = "Thanks for playing";
        }
        return false;
}
field.forEach(e => e.addEventListener("click", function () {
    if (!checkWin()) {
        if (playerOnTurn === 'url("images/cross.png")') {
            if (e.style.backgroundImage === "") {
                document.querySelector("h2").innerHTML = "Player On Turn: O";
                e.style.backgroundImage = playerOnTurn;
                playerOnTurn = 'url("images/circle.png")';
                playerWhoWon = "X"
            }
        } else if (playerOnTurn === 'url("images/circle.png")') {
            if (e.style.backgroundImage === "") {
                document.querySelector("h2").innerHTML = "Player On Turn: X";
                e.style.backgroundImage = playerOnTurn;
                playerOnTurn = 'url("images/cross.png")';
                playerWhoWon = "O"
            }
        }
       // if ()
    } else {
        disableButtons = true;
    }
    document.querySelector(".reset-game").addEventListener("click", function () {
        location.reload();
    });
    checkWin();

}));







