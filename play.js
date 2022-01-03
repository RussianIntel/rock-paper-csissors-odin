
let computerChoices = ['rock', 'paper', 'scissors'];
let computerRandom = computerChoices[Math.floor(Math.random() * computerChoices.length)]; //Computer chooses random game piece

// Getting user input and switching it to lower case for easy comparrison

function playerPlay () {
    let playerEntry = window.prompt ("Would you like to play Rock, Paper, Scissors vs the Machine?");
    let playerOption = playerEntry.toLowerCase ();
    return playerOption;
}

let playerChoice = playerPlay ();


// Playing one round

function computerPlay (playerChoice, computerRandom) {

    if (playerChoice === computerRandom) {
        return "It's a tie";
    }
    if (playerChoice === 'rock') {
        if (computerRandom === 'scissors') {
            return "Player wins with rock";
        }
        else if (computerRandom === 'paper') {
            return "Computer wins with paper"
        }
    }
    if (playerChoice === 'paper') {
        if (computerRandom === 'rock') {
            return "Player wins with paper";
        }
        else if (computerRandom === 'scissors') {
            return "Computer wins with scissors"
        }
    }
    if (playerChoice === 'scissors') {
        if (computerRandom === 'paper') {
            return "Player wins with scissors";
        }
        else if (computerRandom === 'rock') {
            return "Computer wins with rock"
        }
    }
    if (playerChoice != 'rock' && playerChoice != 'paper' && playerChoice != 'scissors') {
        return `You rebel!!! It's a ROCK, PAPER, SCISSOR game and you played ${playerChoice}`;
    }
}
// Looping game 
function game () {
    for (let i = 1; i <=5; i++) {
        let playerChoice = playerPlay();
        let computerRandom = computerChoices[Math.floor(Math.random() * computerChoices.length)];


        alert (`Play turn ${i} Player: ${playerChoice} Computer: ${computerRandom}`); computerPlay (i);
    }
}

game ();



