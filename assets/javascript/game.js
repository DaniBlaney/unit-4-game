
var numberToGet = Math.floor((Math.random()*(120-19 + 1) +19));


$("#numberToGet").text(numberToGet);

var crystalOne = Math.floor(Math.random()*12+1);
var crystalTwo = Math.floor(Math.random()*12+1);
var crystalThree = Math.floor(Math.random()*12+1);
var crystalFour = Math.floor(Math.random()*12+1);

var playerScore = 0;
var wins = 0;
var losses = 0;

$("#numberWins").text(wins);
$("#numberLosses").text(losses);

function reset(){
playerScore = 0;
$("#numberToGet").text(numberToGet);
numberToGet = Math.floor((Math.random()*(120-19+1))+19);
$("#playerScore").text(playerScore);
crystalOne = Math.floor(Math.random() * 12 +1);
crystalTwo = Math.floor(Math.random() * 12 +1);
crystalThree = Math.floor(Math.random() * 12 +1);
crystalFour = Math.floor(Math.random() * 12 +1);


}

function winner() {
alert("You Won!");
wins++;
$("#numberWins").text(wins);
console.log(won)
reset();
}

function loser() {
alert("You Lose!");
losses++;
$("#numberLosses").text(losses);
reset();
}

function checkWinner() {
if (playerScore === numberToGet) {
winner()
}

else if (playerScore > numberToGet) {
loser()
}
}

$("#crystalOne").on("click", function() {
    playerScore = playerScore + crystalOne;
    console.log("New userTotal" + " " + playerScore);
    $("#playerScore").text(playerScore);
    checkWinner();
});

$("#crystalTwo").on("click", function() {
    playerScore = playerScore + crystalTwo;
    console.log("New userTotal" + " " +playerScore);
    $("#playerScore").text(playerScore);

    if (playerScore === numberToGet) {
        winner()
    }
    else if (playerScore > numberToGet) {
        loser()
    }
});

$("#crystalThree").on("click", function() {
    playerScore = playerScore + crystalThree;
    console.log("New userTotal" + " " + playerScore);
    $("#playerScore").text(playerScore);
    if (playerScore === numberToGet) {
        winner()
        }

    else if (playerScore > numberToGet) {
        loser()
    }
});

$("#crystalFour").on("click", function() {
    playerScore = playerScore + crystalFour;
    console.log("New userTotal" + " " + playerScore);
    $("#playerScore").text(playerScore);
    if (playerScore === numberToGet) {
        winner()
    }

    else if (playerScore > numberToGet) {
        loser()
    }
});
