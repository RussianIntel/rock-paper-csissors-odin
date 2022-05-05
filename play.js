// Setting up game parameters

let compChoice = {Value: ""};
let PlayerChoiceId;
let computerRandom = 0;
let playerChoice = 0;
const buttons = document.querySelectorAll('.btn');

let playerScore = 0;
let computerScore = 0;

const player = document.querySelector("#playerScore");
player.textContent = `Player Score: ${playerScore}`;

const computer = document.querySelector("#computerScore");
computer.textContent = `Machine Score: ${computerScore}`;

const roundWinner = document.querySelector("#roundWinner");
roundWinner.textContent = "Game on";


buttons.forEach((button) => {button.addEventListener('click', ()=>{
    playerChoiceId = button.id;
        if (playerChoiceId == "rock") {
            playerChoice = 0;
        }
        else if (playerChoiceId == "scissors") {
            playerChoice = 1;
        }
        else if (playerChoiceId == "paper") {
            playerChoice = 2;
        }
        let computerRandom = gameOn(compChoice); //Computer chooses random game piece
        computerPlay ();
return console.log(playerChoice,computerRandom);
    
})})

// Playing one round

function gameOn(compChoice){
    let choiceNum = Math.floor(Math.random() * 3);
    if (choiceNum == 0){
        compChoice.Value = "rock";
    }
    else if (choiceNum == 1){
        compChoice.Value = "paper";
    }
    else if (choiceNum == 2){
        compChoice.Value = "scissors";
    }
    return choiceNum;
}

function computerPlay () {
    let winArray = [[0,2,1],
                    [1,0,2],
                    [2,1,0]];
    let results = winArray[playerChoice][computerRandom];
    if (results == 0) {
        roundWinner.textContent = `It's a tie`;
    }  
    else if (results == 1) {
        roundWinner.textContent = `You Won`;
        playerScore++;
    }
    else if (results == 2) {
        roundWinner.textContent = `You Lost`;
        computerScore++;
    }
}







//Checking scores
function isGameOver() {
    return playerScore === 5 || computerScore ===5
}

// Looping game, skipping for UI development, but keeping it in for now
//function game () {
//    for (let i = 1; i <=5; i++) {
//        let playerChoice = playerPlay();
//        let computerRandom = computerChoices[Math.floor(Math.random() * computerChoices.length)];


 //       alert (`Play turn ${i} Player: ${playerChoice} Computer: ${computerRandom}`); computerPlay (i);
//    }
//}

//game ();



