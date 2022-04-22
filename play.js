
let computerChoices = ['rock', 'paper', 'scissors'];
let computerRandom = computerChoices[Math.floor(Math.random() * computerChoices.length)]; //Computer chooses random game piece

// Setting up game parameters

let playerScore = 0
let computerScore = 0
let roundWinner = ''
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorBtn = document.querySelector('.scissors');
const playerChoice = [rockBtn,paperBtn,scissorBtn];


playerChoice.forEach(Option => {
    Option.addEventListener('click',computerPlay)
})

// Playing one round

function computerPlay (playerChoice, computerRandom) {

    if (playerChoice === computerRandom) {
        roundWinner = 'tie'
    }
    if (playerChoice === 'rock') {
        if (computerRandom === 'scissors') {
            playerScore++
            roundWinner.textContent = 'player'
        }
        else if (computerRandom === 'paper') {
            computerScore++
            roundWinner.textContent = 'computer'
        }
    }
    if (playerChoice === 'paper') {
        if (computerRandom === 'rock') {
            playerScore++
            roundWinner.textContent = 'player'
        }
        else if (computerRandom === 'scissors') {
            computerScore++
            roundWinner.textContent = 'computer'
        }
    }
    if (playerChoice === 'scissors') {
        if (computerRandom === 'paper') {
            playerScore++
            roundWinner.textContent = 'computer'
            roundWinner = 'player'
        }
        else if (computerRandom === 'rock') {
            computerScore++
            roundWinner.textContent = 'computer'
            roundWinner = 'computer'
        }
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



