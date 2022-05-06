// Setting up game parameters

let compChoice = {Value: ""};
let PlayerChoiceId;
let computerRandom = 0;
let playerChoice = 0;
const buttons = document.querySelectorAll('.btn');

let playerScore = 0;
let computerScore = 0;

const player = document.querySelector("#playerScore");
player.textContent = `${playerScore}`;

const computer = document.querySelector("#computerScore");
computer.textContent = `${computerScore}`;

const roundWinner = document.querySelector("#roundWinner");
roundWinner.textContent = "Game on";

// Adding button listener and initiating game

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
        computerRandom = gameOn(compChoice); //Computer chooses random game piece
        playGame ();
//return console.log(playerChoice,computerRandom); was used for testing, left for now just in case
    
})})

// Random computer logic

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

// Game logic

function computerPlay () {
    if (playerChoice === computerRandom) {
        roundWinner.textContent = `Tie`;
    }
    else if (playerChoice == 0 && computerRandom == 2) {
        roundWinner.textContent = `You win`;
        playerScore++;
    }
    else if (playerChoice == 1 && computerRandom == 0) {
        roundWinner.textContent = `You win`;
        playerScore++;
    }    
    else if (playerChoice == 0 && computerRandom == 1) {
        roundWinner.textContent = `You win`;
        playerScore++;
    }
    else {
        roundWinner.textContent = `You lost`;
        computerScore++;
    }
}

//Determening a winner

function playGame(){
    roundWinner.textContent = "Choose your weapon!";
    computerPlay();
    player.textContent = `${playerScore}`;
    computer.textContent = `${computerScore}`;
if (playerScore == 5) {
    //roundWinner.textContent = `You're the champion`;
    window.alert("You're the winner")
    playerScore = 0;
    computerScore = 0;
    player.textContent = `${playerScore}`;
    computer.textContent = `${computerScore}`;
}
else if (computerScore == 5){
    window.alert("Better luck next time")
    playerScore = 0;
    computerScore = 0;
    player.textContent = `${playerScore}`;
    computer.textContent = `${computerScore}`;
}
}





//Checking scores
//function isGameOver() {
  //  return playerScore === 5 || computerScore ===5
//}

// Looping game, skipping for UI development, but keeping it in for now
//function game () {
//    for (let i = 1; i <=5; i++) {
//        let playerChoice = playerPlay();
//        let computerRandom = computerChoices[Math.floor(Math.random() * computerChoices.length)];


 //       alert (`Play turn ${i} Player: ${playerChoice} Computer: ${computerRandom}`); computerPlay (i);
//    }
//}

//game ();



